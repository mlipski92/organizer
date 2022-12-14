import express from 'express';
import { archiveItem, addItem, deleteCommonTasks, resumeItem, deleteItem, getAll, insert, archived, editItem } from "../controllers/projectsController.js";

const router = express.Router();

router.post('/all', getAll);
router.post('/archive/:id', archiveItem);
router.post('/edit/:id', editItem);
router.post('/add', addItem);
router.post('/archived', archived);
router.post('/resume/:id', resumeItem);
router.post('/delete/:id', deleteItem);
router.post('/deleteCommonTasks/:id', deleteCommonTasks);

export default router;