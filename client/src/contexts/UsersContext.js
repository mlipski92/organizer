import { createContext } from "react";

export const usersObject = {
    currentUser: null,
    setCurrentUser: () => {}
}

export const UsersContext = createContext(usersObject);