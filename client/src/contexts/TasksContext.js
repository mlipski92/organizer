import { createContext } from "react";

export const taskObject = {
    tasks: null,
    setTasks: () => {},
    myTasks: null,
    setMyTasks: () => {},
    deleteTask: null,
    setDeleteTask: (id) => {},
    addingTask: null, 
    setAddingTask: () => {},
    currentProject: null,
    setCurrentProject: (project) => {},
    tickingTask: null,
    setTickingTask: () => {},
    holdedTask: null,
    setHoldedTask: () => {},
    message: null,
    setMessage: () => {}
}

export const TaskContext = createContext(taskObject);