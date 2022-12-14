import { useEffect, useReducer, useState } from "react";
import axios from 'axios';

import projectsReducer from "../reducers/projectsReducer";
import { projectObject } from "../contexts/ProjectsContext";

import MapData from "../components/archivedProjects/MapDataComponent";

const initialProjectsState = {
    loading: true,
    error: '',
    projectsData: {}
}


const ArchivedProjectsPage = () => {
    const [ projects, projectsDispatch ] = useReducer(projectsReducer, initialProjectsState);
    const [ resumingProject, setResumingProject] = useState(projectObject.resumingProject);

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
            <div className="mainPart__projects">
                <div className="mainPart__list">
                    { projects.loading ? "Loading" : <MapData projectsDispatch={projectsDispatch} data={projects.projectsData} setResumingProject={setResumingProject} resumingProject={resumingProject} /> }
                </div>
            </div>
        </>
    )
}

export default ArchivedProjectsPage;