import AstronautaController from "./AstronautasControllers.js";

export default class AstronautasRoute {
	static configRoutes(router) {
		router.route('/').get(AstronautaController.apiGetAstronautas);
		router.route('/id/:id').get(AstronautaController.apiGetAstronautaById);
		router.route('/nacionalidades').get(AstronautaController.apiGetNacionalidades);
	}
}