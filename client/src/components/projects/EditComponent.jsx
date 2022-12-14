import axios from "axios";
import { useContext, useRef } from "react";

import { ProjectContext } from "../../contexts/ProjectsContext";

const EditModal = (props) => {
    const name = useRef(true);
    const {editingProject, setEditingProject, projectsDispatch, setMessage} = useContext(ProjectContext);

    const inputChangeHandler = e => {
        setEditingProject({
                ...editingProject, [name.current.name]: e.target.value
        });     
    }

    const saveChangesHandler = async e => {
        if (e.target.name === "confirmSave") {
       
            await axios.post("http://localhost:8800/projects/edit/"+editingProject.id, { name: editingProject.name })
            .then(response => {
                projectsDispatch({ type: 'EDIT_SUCCESS', payload: editingProject });
                setMessage({msg: "Projekt został edytowany!", type: "SUCCESS"});
                setEditingProject(null);
            })
            .catch(error => {
                console.log(error);
            })
            
        } else if (e.target.name === "cancelSave") {
            setEditingProject(null);
        }
        
    }

    return (
        <> 
            <ProjectContext.Consumer>
                {
                    () => (
                        <div className="editModal">
                            <div className="editModal__popup">
                                <div className="editModal__header">
                                    <h2 className="editModal__h2">Edytuj projekt</h2>
                                </div>
                                <div className="editModal__body">
                                    <div className="editModal__body-inside">
                                        <div className="editModal__form-list">
                                            <div className="editModal__form-item">
                                                <input 
                                                    ref={name} 
                                                    name="name" 
                                                    onChange={inputChangeHandler} 
                                                    value={editingProject.name} 
                                                    type="text" 
                                                    className="editModal__input" 
                                                />
                                                </div>
                                            <div className="editModal__form-item">
                                                <div className="editModal__buttons">
                                                    <button className="editModal__button" name="confirmSave" onClick={saveChangesHandler}>Zapisz</button>
                                                    <button className="editModal__button" name="cancelSave" onClick={saveChangesHandler}>Anuluj</button>
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

export default EditModal;