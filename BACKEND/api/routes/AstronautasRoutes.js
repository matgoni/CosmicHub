import AstronautaController from "../controllers/AstronautasControllers.js";

class AstronautasRoute {
	static configRoutes(router) {
		router.route('/').get(AstronautaController.apiGetAstronautas);
		router.route('/id/:id').get(AstronautaController.apiGetAstronautaById);
		router.route('/nacionalidades').get(AstronautaController.apiGetNacionalidades);
        return router;
	}
}

export default AstronautasRoute;