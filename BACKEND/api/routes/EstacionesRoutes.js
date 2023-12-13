import EstacionesControllers from "../controllers/EstacionesControllers.js";

class estacionesRoute {
	static configRoutes(router) {
		router.route('/estaciones').get(EstacionesControllers.apiGetEstaciones);
        return router;
	}
}

export default estacionesRoute;