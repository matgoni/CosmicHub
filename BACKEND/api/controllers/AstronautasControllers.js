import AstronautasDAO from '../../dao/AstronautasDAO.js';

export default class AstronautasController {
  static async apiGetAstronautas(req, res, next) {
      const astronautasPerPage = req.query.astronautasPerPage ? parseInt(req.query.astronautasPerPage) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 0;
      const filters = {};
      if (req.query.nacionalidad) {
          filters.nacionalidad = req.query.nacionalidad;
      } else if (req.query.nombre) {
          filters.nombre = req.query.nombre;
      }
      const { astronautasList, totalNumAstronautas } = await AstronautasDAO.getAstronautas(
          { filters, page, astronautasPerPage },
      );
      const response = {
          astronautas: astronautasList,
          page,
          filters,
          entries_per_page: astronautasPerPage,
          total_results: totalNumAstronautas,
      };
      res.json(response);
  }

  static async apiGetAstronautaById(req, res, next) {
      try {
          const id = req.params.id || {};
          const astronauta = await AstronautasDAO.getAstronautaById(id);
          if (!astronauta) {
              res.status(404).json({ error: 'not found' });
              return;
          }
          res.json(astronauta);
      } catch (e) {
          console.log('api, ${e}');
          res.status(500).json({ error: e });
      }
  }

  static async apiGetNacionalidades(req, res, next) {
      try {
          const propertyTypes = await AstronautasDAO.getNacionalidades();
          res.json(propertyTypes);
      } catch (e) {
          console.log('api ,${e}');
          res.status(500).json({ error: e });
      }
  }
}
