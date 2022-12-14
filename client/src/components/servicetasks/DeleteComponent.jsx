import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { ServiceTaskContext } from "../../contexts/ServiceTasksContext";



const DeleteModal = (props) => {
    const { deleteServiceTask, setDeleteServiceTask } = useContext(ServiceTaskContext);
    const { servicetasks, servicetasksDispatch } = useContext(ServiceTaskContext);

    
    const deleteServiceTaskHandler = async e => {
        const { name } = e.target;

        if ( name === "confirmDelete") {
            await axios.post("http://localhost:8800/servicetasks/delete/" + deleteServiceTask) 
            .then(response => {
                servicetasksDispatch({ type: 'DELETE_SUCCESS', payload: deleteServiceTask })
                // setTask({msg: "Zadanie zostało usunięte!", type: "SUCCESS"});

            })
            .catch(error => {
                console.log(error);
            })
            setDeleteServiceTask(null);

        } else if (name === "cancelDelete") {
            setDeleteServiceTask(null);
        }
    }

    const askDeleteTaskHandler = (id) => {
        setDeleteServiceTask(id);
    }


    return (
        <>
            <ServiceTaskContext.Consumer>
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
                                                    <button className="deleteModal__button" onClick={deleteServiceTaskHandler} name="confirmDelete">Tak, usuń</button>
                                                    <button className="deleteModal__button" onClick={deleteServiceTaskHandler} name="cancelDelete">Anuluj</button>
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
            </ServiceTaskContext.Consumer>

        </>

    )
}

export default DeleteModal;

