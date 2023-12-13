import mongodb from 'mongodb';

export default class AstronautasDAO {
    static astronautas;
    static ObjectId = mongodb.ObjectId;

    static async injectDB(conn) {
        if (AstronautasDAO.astronautas) {
            return;
        }
        try {
            AstronautasDAO.astronautas= await conn.db(process.env.ASTRONAUTAS_NS)
                .collection('astronautas');
        } catch (e) {
            console.error(`unable to connect in AstronautasDAO: ${e}`);
        }
    }

    static async getAstronautas({ 
        filters = null,
        page = 0,
        astronautasPorPagina = 20,
    } = {}) {
        let query;
        if (filters) {
            if ('nombre' in filters) {
                query = { $text: { $search: filters.nombre } };
            } else if ('nacionalidad' in filters) {
                query = { nacionalidad: { $eq: filters.nacionalidad} };
            }
        }
        let cursor;
        try {
            cursor = await AstronautasDAO.astronautas
                .find(query)
                .limit(astronautasPorPagina)
                .skip(astronautasPorPagina * page);
            const astronautasList = await cursor.toArray();
            const totalNumAstronautas = await AstronautasDAO.astronautas.countDocuments(query);
            return { astronautasList, totalNumAstronautas };
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { astronautasList: [], totalNumAstronautas: 0 };
        }
    }

    static async getNacionalidades() {
        let nacionalidades = [];
        try {
            nacionalidades = await AstronautasDAO.astronautas.distinct('rated');
            return nacionalidades;
        } catch (e) {
            console.error('unable to get nacionalidades, $(e)');
            return nacionalidades;
        }
    }

    static async getAstronautaById(id) {
        try {
            return await AstronautasDAO.astronautas.aggregate([
                {
                    $match: {
                        _id: new AstronautasDAO.ObjectId(id),
                    },
                },
                {
                    $lookup:
                    {
                        from: 'nacionalidad',
                        localField: '_id',
                        foreignField: 'astronauta_id',
                        as: 'nacionalidad',
                    },
                },
            ]).next();
        } catch (e) {
            console.error(`something went wrong in getAstronautaById: ${e}`);
            throw e;
        }
    }

}