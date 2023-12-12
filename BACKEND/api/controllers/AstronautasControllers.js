import { Astronauta } from "../models/astronautas.js";

export default class AstronautasControllers {
  static async apiGetAstronautas(req, res, next) {
    try {
      const astronautas = await Astronauta.find(); // Obtener todos los astronautas de la base de datos
      res.json(astronautas); // Enviar los astronautas como respuesta
    } catch (error) {
      console.error('Error al obtener astronautas:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}
