import { createContext } from "react";

export const usersObject = {
    currentUser: null,
    setCurrentUser: () => {},
    allowUser: () => {}
}

export const UsersContext = createContext(usersObject);