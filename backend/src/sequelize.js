const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

let sequelize;

if (process.env.DB_NAME && process.env.DB_USER) {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD || '',
		{
			host: process.env.DB_HOST || 'localhost',
			dialect: process.env.DB_DIALECT || 'postgres'
		}
	);
} else {
	console.warn('DB env vars missing — falling back to in-memory SQLite for development');
	sequelize = new Sequelize({ dialect: 'sqlite', storage: ':memory:' });
}

module.exports = sequelize;