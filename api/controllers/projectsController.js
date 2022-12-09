import { db } from '../db.js';
import mysql from 'mysql';

export const getAll = (req, res) => {
    const q = "SELECT * FROM projects WHERE status = 1";
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const archived = (req, res) => {
    const q = "SELECT * FROM projects WHERE status = 2";
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const editItem = (req, res) => {
    // const q = "UPDATE projects SET name = '" + req.body.name + "' WHERE id = " + req.params.id;
    const q = "UPDATE projects SET name = '"+req.body.name+"' WHERE id = " + req.params.id;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const insert = (req, res) => {
    const q = "INSERT INTO `projects` (`id`, `name`, `status`) VALUES (null, 'Kolejny rekord.', 2)";
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json("Record added!");
    })
}

export const archiveItem = (req, res) => {
    const update = "UPDATE projects SET status = 2 WHERE id = " + req.params.id;
    db.query(update, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

// export const archiveItem = (req, res) => {
//     const showRecord = "DELETE FROM projects WHERE id = " + req.params.id;
//     db.query(showRecord, (err, data) => {
//         if(err) return res.json(err);
//         return res.status(200).json(data);
//     })
//     return res.status(200).json(req.params);
// }

export const resumeItem = (req, res) => {
    const showRecord = "UPDATE projects SET status = 1 WHERE id = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const addItem = (req, res) => {
    const q = "INSERT INTO projects (id, name, status) VALUES (null, '" + req.body.name + "', 1)"
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const deleteItem = (req, res) => {
    const showRecord = "DELETE FROM projects WHERE id = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const deleteCommonTasks = (req, res) => {
    const showRecord = "DELETE FROM tasks WHERE project = " + req.params.id;
    db.query(showRecord, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}