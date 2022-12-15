import axios from "axios";


const ResumeComponent = (props) => {

    const resumeProjectHandler = async () => {
        await props.setResumingProject({
            id: props.id,
            name: props.name,
            status: 1
        });

        await axios.post("http://localhost:8800/projects/resume/" + props.id)
        .then(response => {
            props.projectsDispatch({ type: 'RESUME_SUCCESS', payload: { id: props.id, name: props.name, status: 1} })
            console.log(props.id, props.name)
        })
        .catch(error => {
            console.log(error);
        })
        props.setResumingProject(null);
    }

    return (
        <>
            <div onClick={ resumeProjectHandler } className="mainPart__button" id={props.id}>Wznów projekt</div>
        </>
    )
}

export default ResumeComponent;