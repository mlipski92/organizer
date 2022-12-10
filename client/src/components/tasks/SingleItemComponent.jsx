import axios from "axios";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";
import TickTask from "./TickComponent";

const HoldButton = (props) => (
    <>
        <p onClick={ () => {props.askHoldedTaskHandler(props.data.filter(el => el.id === props.id)[0])}}>Set onHold</p>
    </>
)

const DeleteButton = (props) => (
    <>
        <p onClick={ () => {props.askDeleteTaskHandler(props.id)} }>Usuń</p>
    </>
)

const ResumeTask = (props) => (
    <>
        <p onClick={props.resumeTaskHandler}>Wznów projekt</p>
    </>
)

const Progress = (props) => {
    if( props.whyholded !== '') {
        return <div className="mainPart__progress--done itemNaviPart">Wstrzymano</div>;
    } else if (props.status === 2) {
        return <div className="mainPart__progress--done itemNaviPart">Zrobione</div>;
    } else if (props.status === 1) {
        return <div className="mainPart__progress--done itemNaviPart">W toku</div>;
    }
}


const SingleItem = (props) => {
    // const {setDeleteTask, deleteTask} = useContext(TaskContext);
    const {deleteTask, setDeleteTask} = useContext(TaskContext);
    const {holdedTask, setHoldedTask} = useContext(TaskContext);
    const {tasksDispatch} = useContext(TaskContext);

    const askDeleteTaskHandler = (id) => {
        setDeleteTask(id);
        console.log("new"+holdedTask)
    }

    const askHoldedTaskHandler = (id) => {
        setHoldedTask(id);
        console.log(holdedTask)
    }

    const resumeTaskHandler = () => {
        saveChangesHandler(props.id);
        console.log("testr");
    }

    const saveChangesHandler = async (id) => {

       console.log("idf: "+ id);
            await axios.post("http://localhost:8800/tasks/hold/"+id, { whyHolded: '' })
            .then(response => {
                tasksDispatch({ type: 'RESUME_SUCCESS', payload: id });
                // setHoldedTask(null);
                // console.log(holdedTask);

            })
            .catch(error => {
                console.log(error);
            })
    }

    
    return(
        <>
            <TaskContext.Consumer>
                {
                    () => (
                        <div className={props.status === 2 ? "mainPart__item done" : "mainPart__item"}>
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
                                                <DeleteButton askDeleteTaskHandler={askDeleteTaskHandler} id={props.id} />
                                                
                                                { props.elData.whyholded !== '' ? <ResumeTask askHoldedTaskHandler={askHoldedTaskHandler} resumeTaskHandler={resumeTaskHandler} id={props.id} /> : null}
                                                {/* { props.elData.whyholded } */}
                                                { props.elData.whyholded !== '' || props.elData.status === 2 ? null : <HoldButton askHoldedTaskHandler={askHoldedTaskHandler} data={props.data} id={props.id} />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mainPart__column itemNavi">
                                        <Progress whyholded={props.elData.whyholded} status={props.elData.status} />
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