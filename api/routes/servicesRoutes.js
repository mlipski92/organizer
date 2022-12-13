import express from 'express';
import { addItem, deleteCommonTasks, deleteItem, getAll } from "../controllers/servicesController.js";

const router = express.Router();

router.post('/all', getAll);
// router.post('/archive/:id', archiveItem);
// router.post('/edit/:id', editItem);
router.post('/add', addItem);
// router.post('/archived', archived);
// router.post('/resume/:id', resumeItem);
router.post('/delete/:id', deleteItem);
router.post('/deleteCommonTasks/:id', deleteCommonTasks);

export default router;