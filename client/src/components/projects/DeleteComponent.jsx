import axios from "axios";
import { useContext } from "react";

import { ProjectContext } from "../../contexts/ProjectsContext";

const DeleteModal = (props) => {
    const { deleteProject, setDeleteProject, projectsDispatch, setMessage } = useContext(ProjectContext);

    const deleteProjectHandler = async e => {
        const { name } = e.target;
        
        if ( name === "confirmDelete") {
            await axios.post("http://localhost:8800/projects/delete/" + deleteProject)
            .then(response => {
                projectsDispatch({ type: 'DELETE_SUCCESS', payload: deleteProject })
                setMessage({msg: "Projekt został usunięty!", type: "SUCCESS"});
            })
            .catch(error => {
                console.log(0);
            })

            await axios.post("http://localhost:8800/projects/deleteCommonTasks/" + deleteProject)
            .then(response => {
                console.log(1);
            })
            .catch(error => {
                console.log(0);
            })
            setDeleteProject(null);
        } else if (name === "cancelDelete") {
            setDeleteProject(null);
        }
    }

    const askDeleteProjectHandler = (id) => {
        setDeleteProject(id);
    }


    return (
        <>
            <ProjectContext.Consumer>
                {
                    () => (
                    <div className="deleteModal">
                        <div className="deleteModal__popup">
                            <div className="deleteModal__header">
                                <h2 className="deleteModal__h2">
                                    Usunąć projekt?
                                </h2>
                                <div className="deleteModal__body">
                                    <div className="editModal__body-inside">
                                        <div className="deleteModal__form-list">
                                            <div className="deleteModal__form-item">
                                                <div className="deleteModal__buttons">
                                                    <button className="deleteModal__button" onClick={deleteProjectHandler} name="confirmDelete">Tak, usuń</button>
                                                    <button className="deleteModal__button" onClick={deleteProjectHandler} name="cancelDelete">Anuluj</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )     
                }
            </ProjectContext.Consumer>

        </>

    )
}

export default DeleteModal;

