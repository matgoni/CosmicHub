import UsersDAO from '../../dao/UsersDAO.js';

export default class UserController {
    static async apiPostRegister(req, res, next) {
        try {
            const { name, email, password, confirm_password } = req.body;
            if (password !== confirm_password) {
                return res.status(400).json({ error: "Passwords do not match." });
            }

            const userResponse = await UsersDAO.register(name, email, password);
            res.json({ success: true, user: userResponse });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiPostLogin(req, res, next) {
        try {
            const { email, password } = req.body;

            const userResponse = await UsersDAO.login(email, password);
            if (userResponse.error) {
                return res.status(400).json(userResponse);
            }

            res.status(200).json({
                success: true,
                token: `Bearer ${userResponse.token}`,
                user: userResponse.user,
                msg: "Hurry! You are now logged in."
            });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetFindByEmail(req, res, next) {
        try {
            const { email } = req.params;
            const userResponse = await UsersDAO.findByEmail(email);
            if (!userResponse) {
                return res.status(404).json({ error: "User not found" });
            }

            res.json({ success: true, user: userResponse });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
