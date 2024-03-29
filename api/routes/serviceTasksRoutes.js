import express from 'express';
import { addItem, deleteItem, getAll, getLast, sumTimes, tickItem } from "../controllers/serviceTasksController.js";

const router = express.Router();

router.post('/get/:id', getAll);
router.post('/getlast', getLast);
router.post('/add', addItem);
router.post('/delete/:id', deleteItem);
router.post('/tick/:id', tickItem);
router.post('/sumtimes', sumTimes);


router.post('/test', (req, res) => {
    res.status(500).json('an error occurred');
})

export default router;