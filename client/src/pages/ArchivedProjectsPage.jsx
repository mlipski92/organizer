import { useEffect, useReducer, useState } from "react";
import axios from 'axios';

import projectsReducer from "../reducers/projectsReducer";
import { ProjectContext, projectObject } from "../contexts/ProjectsContext";

import MapData from "../components/archivedProjects/MapDataComponent";

const initialProjectsState = {
    loading: true,
    error: '',
    projectsData: {}
}


const ArchivedProjectsPage = () => {
    const [ projects, projectsDispatch ] = useReducer(projectsReducer, initialProjectsState);
    const [ resumingProject, setResumingProject ] = useState(projectObject.resumingProject);
    

    useEffect(() => {
        axios.post("http://localhost:8800/projects/archived")
        .then(response => {
            projectsDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            projectsDispatch({ type: 'FETCH_ERROR' })
        })
    }, []);

    return (
        <>
        <ProjectContext.Provider value={{projectsDispatch, resumingProject, setResumingProject }}>
            <div className="mainPart__projects">
                <div className="mainPart__list">
                    {JSON.stringify(projects.projectsData) === "[]" ? <span className="emptyTable">Brak projektów na ten moment...</span> : null} 
                    { projects.loading ? <span className="loadingText">Ładowanie...</span> : <MapData data={projects.projectsData} /> }
                </div>
            </div>
        </ProjectContext.Provider>
        </>
    )
}

export default ArchivedProjectsPage;