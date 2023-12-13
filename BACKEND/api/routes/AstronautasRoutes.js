import AstronautaController from "../controllers/AstronautasControllers.js";

class AstronautasRoute {
	static configRoutes(router) {
		router.route('/astronautas').get(AstronautaController.apiGetAstronautas);
		router.route('/astronautas/id/:id').get(AstronautaController.apiGetAstronautaById);
		router.route('/astronautas/nacionalidades').get(AstronautaController.apiGetNacionalidades);
        return router;
	}
}

export default AstronautasRoute;