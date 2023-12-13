import mongodb from 'mongodb';

export default class LanzamientosDAO {
    static lanzamientos;
    static ObjectId = mongodb.ObjectId;

    static async injectDB(conn) {
        if (LanzamientosDAO.lanzamientos) {
            return;
        }
        try {
            LanzamientosDAO.lanzamientos= await conn.db(process.env.ASTRONAUTAS_NS)
                .collection('Lanzamientos');
        } catch (e) {
            console.error(`unable to connect in LanzamientosDAO: ${e}`);
        }
    }

    static async getLanzamientos({
        page = 0,
        lanzamientosPorPagina = 20,
    } = {}) {
        let cursor;
        try {
            cursor = await LanzamientosDAO.lanzamientos
                .find()
                .limit(lanzamientosPorPagina)
                .skip(lanzamientosPorPagina * page);
            const lanzamientosList = await cursor.toArray();
            const totalNumLanzamientos = await LanzamientosDAO.lanzamientos.countDocuments();
            return { lanzamientosList, totalNumLanzamientos };
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { lanzamientosList: [], totalNumLanzamientos: 0 };
        }
    }
}