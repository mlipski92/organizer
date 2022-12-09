import { Link } from 'react-router-dom';
import ArchiveProject from './ArchiveProjectComponent';
import { ProjectContext } from "../../contexts/ProjectsContext";
import { useContext } from 'react';

const SingleItem = (props) => {
    const { edditingProject, setEditingProject } = useContext(ProjectContext);
    const { deleteProject, setDeleteProject } = useContext(ProjectContext);
    const { projectsDispatch } = useContext(ProjectContext);
    const { archivingProject, setArchivingProject } = useContext(ProjectContext);

    const editButtonHandler = (data) => {
        setEditingProject({
            id: data.id,
            name: data.name,
            status: data.status
        });

    }

    const askDeleteProjectHandler = (id) => {
        setDeleteProject(id);
    }
 
    return(
    <>
        <ProjectContext.Consumer>
            {
                () => (
                    <div className="mainPart__item">
                        <div className="mainPart__a">
                            <div className="mainPart__columns">
                                <div className="mainPart__column item-info">
                                    <div className="mainPart__rows">
                                        <div className="mainPart__row">
                                                <span className="mainPart__item-basic-info">
                                                    <strong className="mainPart__item-title--project">{props.name} ({props.id})</strong>
                                                    Jakub Lipiński | Mateusz Lipski
                                                </span>
                                            <Link to={"/tasks/" + props.id}><p>Zobacz rekordy</p></Link>
                                            <p onClick={() => {editButtonHandler(props.data.filter(el => el.id === props.id)[0]) } }>Edycja</p>
                                            <p onClick={() => {askDeleteProjectHandler(props.id)}}>Usuń</p>
                                        </div>
                                        <div className="mainPart__row">
                                            <div className="mainPart__progress--done" data={props.data}>
                                                W toku
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainPart__column itemNavi">
                                    <ArchiveProject projectsDispatch={projectsDispatch} archivingProject={archivingProject} name={props.name} setArchivingProject={setArchivingProject} id={props.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </ProjectContext.Consumer>

    

    </>
)}

export default SingleItem;