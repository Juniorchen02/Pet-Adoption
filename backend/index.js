import SequelizeStore from "connect-session-sequelize";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import db from "./config/Database.js";
import "./models/ProductModel.js";
import "./models/UsersModel.js";
import AuthRoute from "./routes/AuthRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// Nyalakan untuk inisiasi Database di mysql

(async () => {
    try {
        await db.authenticate();
        console.log("Koneksi ke database berhasil.");
        await db.sync();
        console.log("Database berhasil di-sync.");
        console.log(db.models);
    } catch (error) {
        console.error("Koneksi atau sync database gagal:", error);
    }
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
    
}))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running');
});
 