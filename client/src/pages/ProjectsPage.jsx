import React, { useReducer, useEffect, useState, useRef } from 'react'
import axios from 'axios';

import EditModal from '../components/projects/EditComponent';
import DeleteModal from '../components/projects/DeleteComponent';
import MapData from '../components/projects/MapDataComponent';

import projectsReducer from '../reducers/projectsReducer';
import {AddProject, AddProjectModal} from '../components/projects/AddComponent';

import { ProjectContext, projectObject } from '../contexts/ProjectsContext';
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
        axios.post('http://localhost:8800/projects/all')
        .then(response => {
            projectsDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            projectsDispatch({ type: 'FETCH_ERROR' })
        })
    },[])

console.log(23455);
  return (
    <div>
            <ProjectContext.Provider value={{setAddingProject, addingProject ,setMessage, projectsDispatch}}>
                <div className="mainPart__main-title"><AddProject /></div>
            </ProjectContext.Provider>
            
            <ProjectContext.Provider value={{projectsDispatch, setEditingProject, setDeleteProject, setArchivingProject, archivingProject}}>
                {projects.loading ? 'Loading' : <MapData data={projects.projectsData} />}
            </ProjectContext.Provider>

            {projects.error ? projects.error : null}

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