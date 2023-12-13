import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongodb from 'mongodb';

import AstronautasRoute from './api/routes/AstronautasRoutes.js';
import AstronautasDAO from './dao/AstronautasDAO.js';
import LanzamientosRoute from './api/routes/LanzamientosRoutes.js';
import LanzamientosDAO from './dao/LanzamientosDAO.js';

class Index {
	
	static app = express();
	static router = express.Router();
	
	static main() {
		dotenv.config();
		Index.setUpServer();
		Index.setUpDatabase();
	}

	static setUpServer() {
		Index.app.use(cors());
		Index.app.use(express.json());
		Index.app.use(express.urlencoded({ extended: true }));
		Index.app.use('/api/v1/astronautas', AstronautasRoute.configRoutes(Index.router));
		Index.app.use('/api/v1/lanzamientos', LanzamientosRoute.configRoutes2(Index.router));
		Index.app.use('*', (req, res) => {
			res.status(404).json({ error: 'not found' });
		});
	}
	
	static async setUpDatabase() {

		const client = new mongodb.MongoClient(process.env.MONGODB_URI);
		const port = process.env.PORT || 8000;
		try {
			// Connect to the MongoDB cluster
			await client.connect();
			await AstronautasDAO.injectDB(client);
			await LanzamientosDAO.injectDB(client);
			Index.app.listen(port, () => {
                console.log("Server running 🛰️ http://localhost:" + port);
            });
		} catch (e) {
			console.error(e);
			process.exit(1);
		}
	}
}

Index.main();