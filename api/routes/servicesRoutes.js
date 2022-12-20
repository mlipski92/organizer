import express from 'express';
import { addItem, deleteCommonTasks, deleteItem, getAll, getLast } from "../controllers/servicesController.js";

const router = express.Router();

router.post('/all', getAll);
router.post('/last', getLast);
router.post('/add', addItem);
router.post('/delete/:id', deleteItem);
router.post('/deleteCommonTasks/:id', deleteCommonTasks);

export default router;