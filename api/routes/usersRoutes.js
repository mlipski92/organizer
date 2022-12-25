import express from 'express';
import { addItem, getCurrent, checkIfAllowed, currentUserId, allItems } from "../controllers/usersController.js";

const router = express.Router();

router.post('/add', addItem);
router.post('/getcurrent', getCurrent);
router.post('/getcurrentid/:id', currentUserId);
router.post('/checkifallowed', checkIfAllowed);
router.post('/all', allItems);

export default router;