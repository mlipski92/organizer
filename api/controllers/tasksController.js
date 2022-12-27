import { db } from '../db.js';
import mysql from 'mysql';

export const getAll = (req, res) => {
    const q = `SELECT tasks.id, title, user, prior, project, status, whyholded, name from tasks INNER JOIN users ON tasks.user=users.id WHERE project = "${req.params.id}" `;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const getMyTasks = (req, res) => {
    // const q = `SELECT * from tasks`;
    const q = `SELECT title, tasks.id, projects.id AS projectid, name from tasks INNER JOIN projects ON projects.id = tasks.project WHERE user = "${req.body.userid}" `;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const getHolded = (req, res) => {
    const q = `
    SELECT 
    p.id AS projectid,
    u.name AS username, 
    p.name AS projectname, 
    t.title AS tasktitle, 
    t.whyholded AS taskwhyholded
    from tasks AS t
    INNER JOIN projects AS p ON p.id = t.project
    INNER JOIN users AS u ON t.user=u.id
    WHERE t.whyholded <> "" `;
    db.query(q, (err, data) => {
       if (err) return res.json(err);
       return res.status(200).json(data);
    })
}

export const getInProgress = (req, res) => {
    const q = `
    SELECT 
    p.id AS projectid,
    u.name AS username, 
    p.name AS projectname, 
    t.title AS tasktitle
    from tasks AS t
    INNER JOIN projects AS p ON p.id = t.project
    INNER JOIN users AS u ON t.user=u.id
    WHERE t.status = 1 AND t.whyholded = "" AND p.status <> 2`;
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