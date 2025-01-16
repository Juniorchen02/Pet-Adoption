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

router.get('/pets', getPets);
router.get('/pet/:id', getPetById);
router.get('/pet-types', getPetTypes);
router.post('/pets/', createPet);
router.patch('/pet/:id', updatePet);
router.delete('/pet/:id', deletePet);

export default router;