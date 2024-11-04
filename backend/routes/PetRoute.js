import express from "express";
import {
    createPet,
    deletePet,
    getPetById,
    getPetTypes,
    getPets,
    updatePet
} from "../controllers/Pets.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/pets', verifyUser, getPets);
router.get('/pet/:id', verifyUser, getPetById);
router.get('/pet-types', getPetTypes);
router.post('/pets/', verifyUser, createPet);
router.patch('/pet/:id', updatePet);
router.delete('/pet/:id', deletePet);

export default router;