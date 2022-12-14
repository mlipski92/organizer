import { db } from '../db.js';
import mysql from 'mysql';

export const getAll = (req, res) => {
    const q = "SELECT * FROM services";
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const addItem = (req, res) => {
    const q = "INSERT INTO services (id, name, status) VALUES (null, '" + req.body.name + "', 1)"
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const deleteItem = (req, res) => {
    const showRecord = "DELETE FROM services WHERE id = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const deleteCommonTasks = (req, res) => {
    const showRecord = "DELETE FROM servicetasks WHERE project = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}