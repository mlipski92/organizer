import { createContext } from "react";

export const serviceTaskObject = {
    serviceTasks: null,
    setServiceTasks: () => {},
}

export const ServiceTaskContext = createContext(serviceTaskObject);