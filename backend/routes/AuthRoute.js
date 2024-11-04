import express from "express";
import { Login, logOut, Me, PetsData } from "../controllers/Auth.js";

const router = express.Router();

router.get('/me', Me);
router.get('/pets', PetsData);
router.post('/login', Login);
router.delete('/logout', logOut);

export default router;