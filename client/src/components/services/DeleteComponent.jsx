import axios from "axios";
import { useContext } from "react";

import { ServicesContext } from "../../contexts/ServicesContext";


const DeleteModal = (props) => {
    const { deleteService, setDeleteService, servicesDispatch } = useContext(ServicesContext);
    const { setMessage } = useContext(ServicesContext);

    const deleteServiceHandler = async e => {
        const { name } = e.target;
        
        
        if ( name === "confirmDelete") {
            await axios.post("http://localhost:8800/services/delete/" + deleteService)
            .then(response => {
                servicesDispatch({ type: 'DELETE_SUCCESS', payload: deleteService })
                setMessage({msg: "Projekt został usunięty!", type: "SUCCESS"});
            })
            .catch(error => {
                console.log(0);
            })
            await axios.post("http://localhost:8800/services/deleteCommonTasks/" + deleteService)
            .then(response => {
                console.log(1);
            })
            .catch(error => {
                console.log(0);
            })
            setDeleteService(null);

        } else if (name === "cancelDelete") {
            setDeleteService(null);
        }
    }

    const askDeleteServiceHandler = (id) => {
        setDeleteService(id);
    }


    return (
        <>
            <ServicesContext.Consumer>
                {
                    () => (
                    <div className="deleteModal">
                        <div className="deleteModal__popup">
                            <div className="deleteModal__header">
                                <h2 className="deleteModal__h2">
                                    Usunąć obsługę?
                                </h2>
                                <div className="deleteModal__body">
                                    <div className="editModal__body-inside">
                                        <div className="deleteModal__form-list">
                                            <div className="deleteModal__form-item">
                                                <div className="deleteModal__buttons">
                                                    <button className="deleteModal__button" onClick={deleteServiceHandler} name="confirmDelete">Tak, usuń</button>
                                                    <button className="deleteModal__button" onClick={deleteServiceHandler} name="cancelDelete">Anuluj</button>
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
            </ServicesContext.Consumer>

        </>

    )
}

export default DeleteModal;

