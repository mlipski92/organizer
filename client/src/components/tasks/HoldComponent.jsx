import axios from "axios";
import { useContext, useRef } from "react";

import { TaskContext } from "../../contexts/TasksContext";

const OnHoldModal = (props) => {
    const whyHolded = useRef(true);
    const {holdedTask, setHoldedTask, tasksDispatch} = useContext(TaskContext);
    const { setMessage } = useContext(TaskContext);

    const inputChangeHandler = e => {
        setHoldedTask({
                ...holdedTask, [whyHolded.current.name]: e.target.value
        });     
    }

    const saveChangesHandler = async e => {
        if (e.target.name === "confirmSave") {
       
            await axios.post("http://netcentrum.pl/api/tasks/hold/"+holdedTask.id, { whyHolded: holdedTask.whyholded })
            .then(response => {
                tasksDispatch({ type: 'HOLD_SUCCESS', payload: holdedTask });
                setMessage({msg: "Zadanie zostało wstrzymane!", type: "SUCCESS"});
                setHoldedTask(null);
            })
            .catch(error => {
                console.log(error);
            })
            
        } else if (e.target.name === "cancelSave") {
            setHoldedTask(null);
        }
           
    }

    return (
        <> 
            <TaskContext.Consumer>
                {
                    () => (
                        <div className="editModal">
                            <div className="editModal__popup">
                                <div className="editModal__header">
                                    <h2 className="editModal__h2">Wstrzymaj zadanie</h2>
                                </div>
                                <div className="editModal__body">
                                    <div className="editModal__body-inside">
                                        <div className="editModal__form-list">
                                            <div className="editModal__form-item">
                                                <input 
                                                    ref={whyHolded} 
                                                    name="whyholded" 
                                                    onChange={inputChangeHandler} 
                                                    value={whyHolded.name} 
                                                    type="text" 
                                                    className="editModal__input" 
                                                    placeholder="Dlaczego chcesz wstrzymać zadanie?"
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
            </TaskContext.Consumer>

        </>
    )
}

export default OnHoldModal;