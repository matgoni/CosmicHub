import axios from 'axios'

export default class AstronautasService {
    static async getAstronautas(query = '', by = 'nombre', page = 0) {
        const res = await axios.get(
            `http://localhost:8000/api/v1/astronautas?${by}=${query}&page=${page}`
        );
        return res.data;
    }
    static async getAstronauta(id) {
        const res = await axios.get(
            `http://localhost:8000/api/v1/astronautas/id/${id}`
        );
        return res.data;
    }
    static async getNacionalidades() {
        const res = await axios.get(
            'http://localhost:8000/api/v1/movies/Ncaionalidades'
        );
        return res.data;
    }
}