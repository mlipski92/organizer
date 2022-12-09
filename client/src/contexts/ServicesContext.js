import { createContext } from "react";

export const servicesObject = {
    services: null,
    servicesDispatch: () => {}
}

export const ServicesContext = createContext(servicesObject)