import { db } from '../db.js';
import mysql from 'mysql';

export const addItem = (req, res) => {
    const q = "INSERT INTO users (id, name, logged, img, socialident) VALUES (id, '"+req.body.name+"', 1, '"+req.body.img+"', '"+req.body.socialident+"')"
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getCurrent = (req, res) => {
    const q = `SELECT * FROM users WHERE socialident = "${req.body.socialident}"`;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const allItems = (req, res) => {
    const q = `SELECT * FROM users WHERE allowed = 1`;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const disallowedUsers = (req, res) => {
    const q = `SELECT * FROM users WHERE allowed = 0`;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const checkIfAllowed = (req, res) => {
    const q = `SELECT allowed FROM users WHERE socialident = "${req.body.socialident}"`;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const currentUserId = (req, res) => {
    const q = `SELECT * FROM users WHERE id = "${req.params.id}"`;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const allowUser = (req, res) => {
    const showRecord = "UPDATE users SET allowed = 1 WHERE id = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}