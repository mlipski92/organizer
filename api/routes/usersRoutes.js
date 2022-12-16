import express from 'express';
import { addItem, allItems } from "../controllers/usersController.js";

const router = express.Router();

router.post('/add', addItem);
router.post('/getcurrent', allItems);

export default router;