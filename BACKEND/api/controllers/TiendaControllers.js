import TiendaDAO from '../../dao/TiendaDAO.js';

export default class ItemsControllers {
  static async apiGetTienda(req, res, next) {
      const itemsPorPagina = req.query.itemsPorPagina ? parseInt(req.query.itemsPorPagina) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 0;
      const { itemsList, totalNumItems } = await TiendaDAO.getItems(
          { page, itemsPorPagina },
      );
      const response = {
          items: itemsList,
          page,
          entries_per_page: itemsPorPagina,
          total_results: totalNumItems,
      };
      res.json(response);
  }
}