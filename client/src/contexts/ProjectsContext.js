import { createContext } from "react";

export const projectObject = {
    deleteProject: null,
    setDeleteProject: (id) => {},
    editingProject: null,
    setEditingProject: (id) => {},
    addingProject: null,
    setAddingProject: () => {},
    projectsDispatch: () => {},
    archivingProject: null,
    setArchivingProject: () => {},
    resumingProject: null,
    setResumingProject: () => {},
    message: null,
    setMessage: () => {}
}

export const ProjectContext = createContext(projectObject)