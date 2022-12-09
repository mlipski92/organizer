import { createContext } from "react";

export const taskObject = {
    tasks: null,
    setTasks: () => {},
    deleteTask: null,
    setDeleteTask: (id) => {},
    addingTask: null, 
    setAddingTask: () => {},
    currentProject: null,
    setCurrentProject: (project) => {},
    tickingTask: null,
    setTickingTask: () => {},
    holdedTask: null,
    setHoldedTask: () => {}
}

export const TaskContext = createContext(taskObject);