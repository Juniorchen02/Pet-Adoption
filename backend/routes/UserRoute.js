import express from "express";
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser
} from "../controllers/Users.js";
import { verifyUser } from "../middleware/AuthUser.js";
 
const router = express.Router();

router.get('/users', verifyUser, getUsers);
router.get('/users/:id', verifyUser, getUserById);
router.post('/users/', createUser);
router.patch('/users/:id', verifyUser,  updateUser);
router.delete('/users/:id', verifyUser, deleteUser);

// router.get('/users', getUsers);
// router.get('/users/:id', getUserById);
// router.post('/users/', createUser);
// router.patch('/users/:id',  updateUser);
// router.delete('/users/:id', deleteUser);

export default router;