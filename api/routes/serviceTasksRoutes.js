import express from 'express';
import { addItem, deleteItem, getAll } from "../controllers/serviceTasksController.js";

const router = express.Router();

router.post('/get/:id', getAll);
router.post('/add', addItem);
router.post('/delete/:id', deleteItem);


router.post('/test', (req, res) => {
    res.status(500).json('an error occurred');
})

export default router;