import EstacionesDAO from '../../dao/EstacionesDAO.js';

export default class EstacionesControllers {
  static async apiGetEstaciones(req, res, next) {
      const estacionesPorPagina = req.query.estacionesPorPagina ? parseInt(req.query.estacionesPorPagina) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 0;
      const { estacionesList, totalNumLanzamientos } = await EstacionesDAO.getEstaciones(
          { page, estacionesPorPagina },
      );
      const response = {
          estaciones: estacionesList,
          page,
          entries_per_page: estacionesPorPagina,
          total_results: totalNumLanzamientos,
      };
      res.json(response);
  }
}