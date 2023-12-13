import TiendaControllers from "../controllers/TiendaControllers.js";

class TiendaRoute {
	static configRoutes(router) {
		router.route('/tienda').get(TiendaControllers.apiGetTienda);
        return router;
	}
}

export default TiendaRoute;