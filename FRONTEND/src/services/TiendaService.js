import axios from 'axios'

export default class TiendaService {
    static async getProductos(query = '', by = '', page = 0) {
        const res = await axios.get(
            `http://localhost:8000/api/v1/tienda?${by}=${query}&page=${page}`
        );
        return res.data;
    }
}