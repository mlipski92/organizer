import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";
import TickTask from "./TickComponent";

const SingleItem = (props) => {
    // const {setDeleteTask, deleteTask} = useContext(TaskContext);
    const {deleteTask, setDeleteTask} = useContext(TaskContext);
    const {holdedTask, setHoldedTask} = useContext(TaskContext);

    const askDeleteTaskHandler = (id) => {
        setDeleteTask(id);
        console.log("new"+holdedTask)
    }

    const askHoldedTaskHandler = (id) => {
        setHoldedTask(id);
        console.log(holdedTask)
    }
    
    return(
        <>
            <TaskContext.Consumer>
                {
                    () => (
                        <div className="mainPart__item">
                            <div className="mainPart__a">
                                <div className="mainPart__columns">
                                    <div className="mainPart__column item-info">
                                        <div className="mainPart__rows">
                                            <div className="mainPart__row">
                                                <span className="mainPart__item-basic-info">
                                                    <strong className="mainPart__item-title--task">{props.title} {props.prior === 1 ? <span className="mainPart__item-title--important">(PILNE)</span> : null}</strong>
                                                </span>
                                                <br />
                                                <span className="mainPart__users">Jakub Lipiński | Mateusz Lipski</span>
                                                <br />
                                                <p>{props.whyholded}</p>
                                                <TickTask id={props.id} itemData={props.itemData}  data={props.data} tasksDispatch={props.tasksDispatch} /> {props.status}
                                                <p onClick={ () => {askDeleteTaskHandler(props.id)} }>Usuń</p>
                                                <p onClick={ () => {askHoldedTaskHandler(props.data.filter(el => el.id === props.id)[0])}}>Set onHold</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mainPart__column itemNavi">
                                        <div className="mainPart__progress--done itemNaviPart">
                                            W toku
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

export default SingleItem