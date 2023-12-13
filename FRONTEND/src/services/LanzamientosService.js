import axios from 'axios'

export default class LanzamientosService {
    static async getLanzamientos(query = '', by = '', page = 0) {
        const res = await axios.get(
            `http://localhost:8000/api/v1/lanzamientos?${by}=${query}&page=${page}`
        );
        return res.data;
    }
}