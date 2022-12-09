import axios from "axios";

const ArchiveProject = (props) => {

    const archiveProjectHandler = async e => {
        await props.setArchivingProject({
            id: props.id,
            name: props.name,
            status: 2
        });

        await axios.post("http://localhost:8800/projects/archive/" + props.id)
        .then(response => {
            console.log("Res data: "+response);
            props.projectsDispatch({ type: 'ARCHIVE_SUCCESS', payload: { id: props.id, name: props.name, status: 2} })
            
        })
        .catch(error => {
            console.log(error);
        })
        props.setArchivingProject(null);

        // console.log("archiving "+props.)

    }


    return (
        <>
            <div onClick={ archiveProjectHandler } className="mainPart__button" id={props.id}>Archiwizuj projekt</div>
        </>
    )
}
export default ArchiveProject