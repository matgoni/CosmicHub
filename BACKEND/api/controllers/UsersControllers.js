import UsersDAO from '../../dao/UsersDAO.js';

export default class UserController {
    static async apiPostRegister(req, res, next) {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const confirm_password = req.body.confirm_password;

            if (!email || !name || !password || !confirm_password) {
                return res.status(400).json({ error: "Todos los campos son obligatorios." });
            }

            if (password !== confirm_password) {
                return res.status(400).json({ error: "Las contraseñas no coinciden." });
            }
            let UserResponse = await UsersDAO.findByEmail(
                email,
            );
            if (UserResponse) {
                return res.status(400).json({
                    error: "Email already registered."
                });
            }
            UserResponse = await UsersDAO.register(
                name,
                email,
                password
            );
            console.log(UserResponse);
            if (UserResponse.error) {
                return res.status(400).json({ error: UserResponse.error });
            }

            res.json({ success: true, user: UserResponse });
        } catch (e) {
            console.log("Error en apiPostRegister", e);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async apiPostLogin(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: "Correo electrónico y contraseña son obligatorios." });
            }

            const userResponse = await UsersDAO.login(email, password);
            if (userResponse.error) {
                return res.status(400).json({ error: userResponse.error });
            }

            res.json({
                success: true,
                token: `Bearer ${userResponse.token}`,
                user: userResponse.user,
                msg: "¡Inicio de sesión exitoso!"
            });
        } catch (e) {
            console.log("Error en apiPostLogin", e);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    static async apiGetFindByEmail(req, res, next) {
        try {
            const { email } = req.params;
            const userResponse = await UsersDAO.findByEmail(email);
            if (!userResponse) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            res.json({ success: true, user: userResponse });
        } catch (e) {
            console.log("Error en apiGetFindByEmail", e);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
