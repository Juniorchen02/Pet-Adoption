import express from "express";
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct
} from "../controllers/Product.js";

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products/', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('./products/:id', deleteProduct);

export default router;