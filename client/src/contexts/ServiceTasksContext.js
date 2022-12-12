import { createContext } from "react";

export const serviceTaskObject = {
    serviceTasks: null,
    setServiceTasks: () => {},
    currentProject: null,
    setCurrentProject: () => {},
    addingServiceTask: null, 
    setAddingServiceTask: () => {}
}

export const ServiceTaskContext = createContext(serviceTaskObject);