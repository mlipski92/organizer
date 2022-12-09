import express from 'express';
import { getAll, deleteItem, tickItem, holdItem, addItem } from "../controllers/tasksController.js";

const router = express.Router();

router.post('/get/:id', getAll);
router.post('/delete/:id', deleteItem);
router.post('/tick/:id', tickItem);
router.post('/add', addItem);
router.post('/hold/:id', holdItem);

export default router;