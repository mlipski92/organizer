import { db } from '../db.js';
import mysql from 'mysql';

export const getAll = (req, res) => {
    const q = `SELECT servicetasks.id, title, time, status, project, user, name from servicetasks INNER JOIN users ON servicetasks.user=users.id WHERE project = "${req.params.id}" `;

    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const getLast = (req, res) => {
    const q = `SELECT * from servicetasks ORDER BY id DESC LIMIT 1`;

    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const deleteItem = (req, res) => {
    const showRecord = "DELETE FROM servicetasks WHERE id = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const addItem = (req, res) => {
    const q = "INSERT INTO servicetasks (id, title, time, status, project, user) VALUES (null, '"+req.body.title+"', "+req.body.time+", 1, "+req.body.project+", '"+req.body.user+"')";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data.data);
    })
}

export const tickItem = (req, res) => {
    const update = "UPDATE servicetasks SET status = 2 WHERE id = " + req.params.id;
    db.query(update, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}
