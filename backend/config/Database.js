import { Sequelize } from "sequelize";

const db = new Sequelize(
    process.env.DB_NAME,           // Nama database
    process.env.DB_USER,           // Username
    process.env.DB_PASSWORD,       // Password
    {
        host: process.env.DB_HOST, // Host dari variabel lingkungan
        dialect: "mysql",
        port: process.env.DB_PORT || 3306 // Port (opsional, default ke 3306)
    }
);
 
export default db;