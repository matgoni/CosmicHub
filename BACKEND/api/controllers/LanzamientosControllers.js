import LanzamientosDAO from '../../dao/LanzamientosDAO.js';

export default class LanzamientosControllers {
  static async apiGetLanzamientos(req, res, next) {
      const lanzamientosPorPagina = req.query.lanzamientosPorPagina ? parseInt(req.query.lanzamientosPorPagina) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 0;
      const { lanzamientosList, totalNumLanzamientos } = await LanzamientosDAO.getLanzamientos(
          { page, lanzamientosPorPagina },
      );
      const response = {
          lanzamientos: lanzamientosList,
          page,
          entries_per_page: lanzamientosPorPagina,
          total_results: totalNumLanzamientos,
      };
      res.json(response);
  }
}