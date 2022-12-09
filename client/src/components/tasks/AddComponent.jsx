import axios from "axios";
import { useEffect, useRef, useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";



export const AddTask = () => {
    const { addingTask, setAddingTask } = useContext(TaskContext);
    const { currentProject, setCurrentProject } = useContext(TaskContext);

    const addTaskHandler = () => {
        
        setAddingTask(
            {
                id: null,
                title: '',
                user: 1,
                prior: 0,
                project: currentProject,
                status: 1,
                whyholded: ''
            }
        );
    }


    return (
        <>
            <TaskContext.Consumer>
                {
                    () => (
                        <h1 className="mainPart__h1">Wszystkie taski <strong onClick={addTaskHandler}>(Dodaj)</strong></h1>
                    )
                }
            </TaskContext.Consumer>
            
        </>
    )
}

export const AddTaskModal = (props) => {
    const title = useRef(true);
    const { addingTask, setAddingTask, tasksDispatch } = useContext(TaskContext);
    const { currentProject, setCurrentProject } = useContext(TaskContext);
    // const { setMessage } = useContext(ProjectContext);
    // setCurrentProject(33);

    const inputChangeHandler = e => {
        setAddingTask({
                ...addingTask, [title.current.name]: e.target.value
        });    
    }

    useEffect(() => {
        
        console.log(currentProject);
    },[])

    const saveTaskHandler = async e => {
        const { name } = e.target;
        if (name === "cancelSave") {
            setAddingTask(null);
        } else if (name === 'confirmSave') {
        
            // await axios.post('http://localhost:8800/tasks/add', {title: addingTask.title})
            await axios.post('http://localhost:8800/tasks/add', {
                id: null,
                title: addingTask.title,
                user: addingTask.user,
                prior: addingTask.prior,
                project: addingTask.project,
                status: addingTask.status,
                whyholded: addingTask.whyholded
            })
            .then( response => {
                // setMessage({msg: "Projekt został dodany!", type: "SUCCESS"});
                tasksDispatch({ type: 'ADD_SUCCESS', payload: addingTask });
                setAddingTask(null);
                console.log("asdas  "+JSON.stringify(response));
            })
            .catch(error => {
                // setMessage('test')
                console.log(error);
            })
        }
    }


    return (
        <>
            <TaskContext.Consumer>
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
                                                    ref={title}
                                                    name="title" 
                                                    onChange={inputChangeHandler} 
                                                    value={addingTask.title} 
                                                    type="text" 
                                                    className="addModal__input" 
                                                />
                                                </div>
                                            <div className="addModal__form-item">
                                                <div className="addModal__buttons">
                                                    <button className="addModal__button" name="confirmSave" onClick={saveTaskHandler}>Zapisz</button>
                                                    <button className="addModal__button" name="cancelSave" onClick={saveTaskHandler}>Anuluj</button>
                                                
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                        </div>
                    )
                }
            </TaskContext.Consumer>

        </>
    )
}