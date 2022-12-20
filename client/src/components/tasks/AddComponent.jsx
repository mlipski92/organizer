import axios from "axios";
import { useState } from "react";
import { useEffect, useRef, useContext } from "react";

import { TaskContext } from "../../contexts/TasksContext";
import { UsersContext, usersObject } from "../../contexts/UsersContext";



export const AddTask = () => {
    const { addingTask, setAddingTask } = useContext(TaskContext);
    const { currentProject, setCurrentProject } = useContext(TaskContext);

    const addTaskHandler = () => {
        
        setAddingTask(
            {
                id: null,
                title: '',
                user: 0,
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
                        <h1 className="mainPart__h1">Wszystkie zadania <strong onClick={addTaskHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 187.091 187.882">
                                <g id="Group_3" data-name="Group 3" transform="translate(-248.742 -767.664)">
                                    <path id="Exclusion_6" data-name="Exclusion 6" d="M42.594,85.188A42.605,42.605,0,0,1,26.014,3.347,42.605,42.605,0,0,1,59.174,81.841,42.328,42.328,0,0,1,42.594,85.188ZM20.554,35.025V49.26H35.509V63.328H49.245V49.26H63.479V35.025H49.245V20.68H35.509V35.025Z" transform="translate(350.644 870.358)" fill="#fff"/>
                                    <path id="Path_13" data-name="Path 13" d="M349.074,949.776H275.041s-10.89-1.718-18.666-9.782a27.807,27.807,0,0,1-7.632-18.073V791.645a23.915,23.915,0,0,1,9.937-17.547c9.793-7.2,18.793-6.408,18.793-6.408h52.75s14.509,7.95,30.7,24.986S384.138,818.7,384.138,818.7s1.685,2.715,1.591,8.8,0,29.111,0,29.111l-15.013,3.9V831.2s.368-5.4-7.416-5.4H332.039a5.757,5.757,0,0,1-4.763-6.1v-31.28s.1-5.965-4.622-5.965H274.99s-4.154-.585-8.253,4.344-3.656,8.253-3.656,8.253V922.426a13.126,13.126,0,0,0,3.661,7.344c3.168,2.952,8.568,4.176,8.568,4.176H341Z" transform="translate(0)" fill="#fff"/>
                                </g>
                            </svg>
                        </strong></h1>
                    )
                }
            </TaskContext.Consumer>
            
        </>
    )
}

export const AddTaskModal = (props) => {
    const title = useRef(true);
    const prior = useRef(true);

    const { addingTask, setAddingTask, tasksDispatch } = useContext(TaskContext);
    const { currentProject, setCurrentProject } = useContext(TaskContext);
    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const [ currentUserId, setCurrentUserId ] = useState(null);

    useEffect(() => {
        (async () => {
            await axios.post('http://localhost:8800/users/getcurrent', { socialident: currentUser })
            .then(response => {
                setCurrentUserId(response.data[0].id);
            })
            .catch(error => {
                console.log('Error');
            })
        })()
        
    })
    

    const inputChangeHandler = e => {
        console.log("current id: "+currentUserId);
        setAddingTask({
                ...addingTask, [e.target.name]: e.target.value, user: currentUserId
        });  
    }

    const priorHandler = e => {
        if(e.target.checked === true) {
            setAddingTask({
                ...addingTask, prior: 1
            });  
        } else {
            setAddingTask({
                ...addingTask, prior: 0
            });  
        }
    }

    const saveTaskHandler = async e => {
        const { name } = e.target;
        
        console.log(currentUser);
        

        if (name === "cancelSave") {
            setAddingTask(null);
        } else if (name === 'confirmSave') {
        
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


                axios.post('http://localhost:8800/tasks/getlast')
                .then(responseLast => {
                    const { title, id } = responseLast.data[0];
                        if(addingTask.title === title) {
                            tasksDispatch({ type: 'ADD_SUCCESS', payload: {...addingTask, id:id} });
                        } else {
                            console.log('error przy dodawaniu');
                        }   
                        setAddingTask(null);     
                })
                .catch(error => {
                    tasksDispatch({ type: 'FETCH_ERROR' })
                })

                setAddingTask(null);
            })
            .catch(error => {
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
                                                <label>
                                                    <input type="checkbox" ref={prior} onClick={priorHandler} />
                                                    <span>Wysoki priorytet</span>
                                                </label>
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