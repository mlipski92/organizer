import React, { useReducer, useEffect, useState, useRef } from 'react'
import axios from 'axios';

import { ProjectContext, projectObject } from '../contexts/ProjectsContext';
import projectsReducer from '../reducers/projectsReducer';

import MapData from '../components/projects/MapDataComponent';
import EditModal from '../components/projects/EditComponent';
import DeleteModal from '../components/projects/DeleteComponent';
import {AddProject, AddProjectModal} from '../components/projects/AddComponent';
import MessageComponent from '../components/projects/MessageComponent';

const initialProjectsState = {
    loading: true,
    error: '',
    projectsData: {}
}
 
const ProjectsPage = () => {
    const [projects, projectsDispatch] = useReducer(projectsReducer, initialProjectsState);
    const [editingProject, setEditingProject] = useState(projectObject.editingProject);
    const [deleteProject, setDeleteProject] = useState(projectObject.deleteProject);
    const [addingProject, setAddingProject] = useState(projectObject.addingProject);
    const [archivingProject, setArchivingProject] = useState(projectObject.archivingProject);
    const [message, setMessage] = useState(projectObject.message);
 
    useEffect(() => {
        axios.get('http://netcentrum.pl/api/projects/all')
        .then(response => {
            projectsDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            projectsDispatch({ type: 'FETCH_ERROR' })
        })
    },[])

  return (
    <div>
            <ProjectContext.Provider value={{setAddingProject, addingProject ,setMessage, projectsDispatch}}>
                <div className="mainPart__main-title"><AddProject /></div>
            </ProjectContext.Provider>
            
            <ProjectContext.Provider value={{projectsDispatch, setEditingProject, setDeleteProject, setArchivingProject, archivingProject}}>
                {JSON.stringify(projects.projectsData) === "[]" ? <span className="emptyTable">Brak projektów na ten moment...</span> : null}
                {projects.loading ? <span className="loadingText">Ładowanie...</span> : <MapData data={projects.projectsData} />}
            </ProjectContext.Provider>

            <ProjectContext.Provider value={{editingProject, setEditingProject, projectsDispatch, setMessage}}>
                {editingProject !== null ? <EditModal /> : null}
            </ProjectContext.Provider>
            
            <ProjectContext.Provider value={{deleteProject, setDeleteProject, projectsDispatch, setMessage}}>
                {deleteProject !== null ? <DeleteModal /> : null}
            </ProjectContext.Provider>
            
            <ProjectContext.Provider value={{setAddingProject, addingProject, projectsDispatch, setMessage}}>
                { addingProject !== null ? <AddProjectModal /> : null}
            </ProjectContext.Provider>

            <ProjectContext.Provider value={{message, setMessage}}>
                <MessageComponent />
            </ProjectContext.Provider>
            
       
    </div>
  )
}

export default ProjectsPage