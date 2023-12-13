import axios from 'axios';

export default class AstronautasService {
  static async getAstronautas(query = '', by = 'nombre', page = 0) {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/astronautas?${by}=${query}&page=${page}`
      );
      return res.data;
    } catch (error) {
      console.error('Error fetching astronautas:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  }

  static async getAstronauta(id) {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/astronautas/id/${id}`
      );
      return res.data;
    } catch (error) {
      console.error(`Error fetching astronaut with ID ${id}:`, error);
      throw error;
    }
  }

  static async getNacionalidades() {
    try {
      const res = await axios.get(
        'http://localhost:8000/api/v1/astronautas/nacionalidades'
      );
      return res.data;
    } catch (error) {
      console.error('Error fetching nacionalidades:', error);
      throw error;
    }
  }
}
