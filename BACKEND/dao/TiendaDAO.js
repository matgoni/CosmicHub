import mongodb from 'mongodb';

export default class TiendaDAO {
    static items;
    static ObjectId = mongodb.ObjectId;

    static async injectDB(conn) {
        if (TiendaDAO.items) {
            return;
        }
        try {
            TiendaDAO.items= await conn.db(process.env.ASTRONAUTAS_NS)
                .collection('Productos_Tienda');
        } catch (e) {
            console.error(`unable to connect in TiendaDAO: ${e}`);
        }
    }

    static async getItems({
        page = 0,
        itemsPorPagina = 20,
    } = {}) {
        let cursor;
        try {
            cursor = await TiendaDAO.items
                .find()
                .limit(itemsPorPagina)
                .skip(itemsPorPagina * page);
            const itemsList = await cursor.toArray();
            const totalNumItems = await TiendaDAO.items.countDocuments();
            return { itemsList, totalNumItems };
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { itemsList: [], totalNumItems: 0 };
        }
    }
}