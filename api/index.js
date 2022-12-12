import express from "express";
import projectRoutes from "./routes/projectsRoutes.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import serviceTasksRoutes from "./routes/serviceTasksRoutes.js";


import cors from 'cors';

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

app.use("/projects", projectRoutes);
app.use("/tasks", tasksRoutes);
app.use("/services", servicesRoutes);
app.use("/servicetasks", serviceTasksRoutes)


app.post('/', (req, res) => {
    res.status(500).json('an error occurred');
  })

app.listen(8800, () => {
    console.log('Connected!');
})