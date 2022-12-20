import axios from "axios";
import { useContext, useState } from "react";
import { ProjectContext, projectObject } from "../../contexts/ProjectsContext";



const ResumeComponent = (props) => {
    const { projects, projectsDispatch } = useContext(ProjectContext);
    const { resumingProject, setResumingProject } = useContext(ProjectContext);

    const resumeProjectHandler = async () => {
        await setResumingProject({
            id: props.id,
            name: props.name,
            status: 1
        });

        await axios.post("http://localhost:8800/projects/resume/" + props.id)
        .then(response => {
            projectsDispatch({ type: 'RESUME_SUCCESS', payload: { id: props.id, name: props.name, status: 1} });
        })
        .catch(error => {
            console.log(error);
        })
        setResumingProject(null);
    }

    return (
        <>
            <div onClick={ resumeProjectHandler } className="mainPart__button" id={props.id}>Wznów projekt</div>
        </>
    )
}

export default ResumeComponent;