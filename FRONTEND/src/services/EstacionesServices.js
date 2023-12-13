import axios from 'axios'

export default class EstacionesService {
    static async getEstaciones(query = '', by = '', page = 0) {
        const res = await axios.get(
            `http://localhost:8000/api/v1/estacion?${by}=${query}&page=${page}`
        );
        return res.data;
    }
}