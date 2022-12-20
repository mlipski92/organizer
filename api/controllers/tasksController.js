import { db } from '../db.js';
import mysql from 'mysql';

export const getAll = (req, res) => {
    const q = `SELECT tasks.id, title, user, prior, project, status, whyholded, name from tasks INNER JOIN users ON tasks.user=users.id WHERE project = "${req.params.id}" `;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const getLast = (req, res) => {
    const q = `SELECT * from tasks ORDER BY id DESC LIMIT 1 `;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const deleteItem = (req, res) => {
    const showRecord = "DELETE FROM tasks WHERE id = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const addItem = (req, res) => {
    const q = "INSERT INTO tasks (id, title, user, prior, project, status, whyholded) VALUES (null, '"+req.body.title+"', "+req.body.user+", "+req.body.prior+", "+req.body.project+", 1, '"+req.body.whyholded+"')"
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data.data);
    })
}

export const tickItem = (req, res) => {
    const update = "UPDATE tasks SET status = 2 WHERE id = " + req.params.id;
    db.query(update, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const holdItem = (req, res) => {
    const q = "UPDATE tasks SET whyholded = '"+req.body.whyHolded+"' WHERE id = " + req.params.id;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}