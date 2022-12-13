import { createContext } from "react";

export const servicesObject = {
    services: null,
    servicesDispatch: () => {},
    addingService: null,
    setAddingService: () => {},
    deleteService: null,
    setDeleteService: () => {}
}

export const ServicesContext = createContext(servicesObject)