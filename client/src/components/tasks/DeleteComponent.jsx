import axios from "axios";
import { useContext } from "react";

import { TaskContext } from "../../contexts/TasksContext";

const DeleteModal = (props) => {
    const { deleteTask, setDeleteTask } = useContext(TaskContext);
    const { tasksDispatch } = useContext(TaskContext);
    const { setMessage } = useContext(TaskContext);

    const deleteTaskHandler = async e => {
        const { name } = e.target;

        if ( name === "confirmDelete") {
            await axios.post("http://netcentrum.pl/api/tasks/delete/" + deleteTask) 
            .then(response => {
                tasksDispatch({ type: 'DELETE_SUCCESS', payload: deleteTask })
                setMessage({msg: "Zadanie zostało usunięte!", type: "SUCCESS"});

            })
            .catch(error => {
                console.log(error);
            })
            setDeleteTask(null);

        } else if (name === "cancelDelete") {
            setDeleteTask(null);
        }
    }

    return (
        <>
            <TaskContext.Consumer>
                {
                    () => (
                    <div className="deleteModal">
                        <div className="deleteModal__popup">
                            <div className="deleteModal__header">
                                <h2 className="deleteModal__h2">
                                    Usunąć zadanie?
                                </h2>
                                <div className="deleteModal__body">
                                    <div className="editModal__body-inside">
                                        <div className="deleteModal__form-list">
                                            <div className="deleteModal__form-item">
                                                <div className="deleteModal__buttons">
                                                    <button className="deleteModal__button" onClick={deleteTaskHandler} name="confirmDelete">Tak, usuń</button>
                                                    <button className="deleteModal__button" onClick={deleteTaskHandler} name="cancelDelete">Anuluj</button>
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
            </TaskContext.Consumer>

        </>

    )
}

export default DeleteModal;

