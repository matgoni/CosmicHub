import mongodb from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class UsersDAO {
    static users;
    static ObjectId = mongodb.ObjectId;

    static async injectDB(conn) {
        if (UsersDAO.users) {
            return;
        }
        try {
            UsersDAO.users = await conn.db(process.env.ASTRONAUTAS_NS).collection('Usuarios');
        } catch (e) {
            throw new Error(`unable to establish connection handle in usersDAO: ${e}`);
        }
    }

    static async register(name, email, password) {
        try {
            const existingUser = await this.findByEmail(email);
            if (existingUser) {
                throw new Error("Email already registered");
            }

            const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
            const hash = await bcrypt.hash(password, salt);

            let userDoc = { name, email, password: hash };
            await UsersDAO.users.insertOne(userDoc);

            return { user: { name, email } };
        } catch (e) {
            throw new Error(`unable to register user: ${e}`);
        }
    }

    static async login(email, password) {
        try {
            const user = await this.findByEmail(email);
            if (!user) {
                return { error: "User not found", success: false };
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return { error: "Incorrect password", success: false };
            }

            const payload = {
                _id: user._id,
                name: user.name,
                email: user.email
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1w' });
            return { success: true, token, user: payload };
        } catch (e) {
            throw new Error(`login failed: ${e}`);
        }
    }

    static async findByEmail(email) {
        try {
            const query = { email };
            const user = await UsersDAO.users.findOne(query);
            return user;
        } catch (e) {
            throw new Error(`unable to find user: ${e}`);
        }
    }
}
