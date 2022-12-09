import axios from "axios";
import { useEffect, useRef, useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectsContext";



export const AddProject = () => {
    const { addingProject, setAddingProject } = useContext(ProjectContext);

    const addProjectHandler = () => {
        setAddingProject(
            {
                id: null,
                name: '',
                status: 1
            }
        );
    }


    return (
        <>
            <ProjectContext.Consumer>
                {
                    () => (
                        <h1 className="mainPart__h1">Wszystkie projekty <strong onClick={addProjectHandler}>(Dodaj)</strong></h1>
                    )
                }
            </ProjectContext.Consumer>
            
        </>
    )
}

export const AddProjectModal = (props) => {
    const name = useRef(true);
    const { addingProject, setAddingProject, projectsDispatch } = useContext(ProjectContext);
    const { setMessage } = useContext(ProjectContext);


    const inputChangeHandler = e => {
        setAddingProject({
                ...addingProject, [name.current.name]: e.target.value
        });    
    }

    useEffect(() => {
        console.log(projectsDispatch);
    },[])

    const saveProjectHandler = async e => {
        const { name } = e.target;
        if (name === "cancelSave") {
            setAddingProject(null);
        } else if (name === 'confirmSave') {
            await axios.post('http://localhost:8800/projects/add', {name: addingProject.name})
            .then( response => {
                setMessage({msg: "Projekt został dodany!", type: "SUCCESS"});
                projectsDispatch({ type: 'ADD_SUCCESS', payload: addingProject });
                console.log("addingProject"+ addingProject.id);
                setAddingProject(null);
                
            })
            .catch(error => {
                // setMessage('test')
                console.log(error);
            })
        }
    }


    return (
        <>
            <ProjectContext.Consumer>
                {
                    () => (
                        <div className="addModal">
                            <div className="addModal__popup">
                                <div className="addModal__header">
                                    <h2 className="addModal__h2">Dodaj projekt</h2>
                                </div>
                                <div className="addModal__body">
                                    <div className="addModal__body-inside">
                                        <div className="addModal__form-list">
                                            <div className="addModal__form-item">
                                                <input  
                                                    ref={name}
                                                    name="name" 
                                                    onChange={inputChangeHandler} 
                                                    value={addingProject.name} 
                                                    type="text" 
                                                    className="addModal__input" 
                                                />
                                                </div>
                                            <div className="addModal__form-item">
                                                <div className="addModal__buttons">
                                                    <button className="addModal__button" name="confirmSave" onClick={saveProjectHandler}>Zapisz</button>
                                                    <button className="addModal__button" name="cancelSave" onClick={saveProjectHandler}>Anuluj</button>
                                                
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