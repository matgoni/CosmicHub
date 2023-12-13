import mongodb from 'mongodb';

export default class EstacionesDAO {
    static estaciones;
    static ObjectId = mongodb.ObjectId;

    static async injectDB(conn) {
        if (EstacionesDAO.estaciones) {
            return;
        }
        try {
            EstacionesDAO.estaciones= await conn.db(process.env.ASTRONAUTAS_NS)
                .collection('Estaciones_Espaciales');
        } catch (e) {
            console.error(`unable to connect in EstacionesDAO: ${e}`);
        }
    }

    static async getEstaciones({
        page = 0,
        estacionesPorPagina = 20,
    } = {}) {
        let cursor;
        try {
            cursor = await EstacionesDAO.estaciones
                .find()
                .limit(estacionesPorPagina)
                .skip(estacionesPorPagina * page);
            const estacionesList = await cursor.toArray();
            const totalNumEstaciones = await EstacionesDAO.estaciones.countDocuments();
            return { estacionesList, totalNumEstaciones };
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { estacionesList: [], totalNumEstaciones: 0 };
        }
    }
}