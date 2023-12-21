import UserController from "../controllers/UsersControllers.js";

class UserRoute {
	static configRoutes(router) {
		router.route('/login').post(UserController.apiPostLogin);
		router.route('/register').post(UserController.apiPostRegister);
		router.route('/user/:email').get(UserController.apiGetFindByEmail);
        return router;
	}
}

export default UserRoute;