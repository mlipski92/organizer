import { createContext } from "react";

export const serviceTaskObject = {
    serviceTasks: null,
    setServiceTasks: () => {},
    currentProject: null,
    setCurrentProject: () => {},
    addingServiceTask: null, 
    setAddingServiceTask: () => {},
    deleteServiceTask: null,
    setDeleteServiceTask: (id) => {},
    message: null,
    setMessage: () => {}
}

export const ServiceTaskContext = createContext(serviceTaskObject);