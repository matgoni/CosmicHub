import LanzamientosControllers from "../controllers/LanzamientosControllers.js";

class LanzamientosRoute {
	static configRoutes(router) {
		router.route('/lanzamientos').get(LanzamientosControllers.apiGetLanzamientos);
        return router;
	}
}

export default LanzamientosRoute;