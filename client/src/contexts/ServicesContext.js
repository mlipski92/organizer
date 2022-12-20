import { createContext } from "react";

export const servicesObject = {
    services: null,
    servicesDispatch: () => {},
    addingService: null,
    setAddingService: () => {},
    deleteService: null,
    setDeleteService: () => {},
    message: null,
    setMessage: () => {}
}

export const ServicesContext = createContext(servicesObject)