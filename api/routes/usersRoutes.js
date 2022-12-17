import express from 'express';
import { addItem, allItems, currentUserId } from "../controllers/usersController.js";

const router = express.Router();

router.post('/add', addItem);
router.post('/getcurrent', allItems);
router.post('/getcurrentid/:id', currentUserId);

export default router;