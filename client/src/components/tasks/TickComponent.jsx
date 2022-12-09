import axios from "axios";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const TickTask = (props) => {
    const { tasks, tasksDispatch } = useContext(TaskContext);
    const { tickingTask, setTickingTask } = useContext(TaskContext);


    const tickTaskHandler = async e => {
        await setTickingTask(props.id);

        await axios.post("http://localhost:8800/tasks/tick/" + props.id)
        .then(response => {
            const newData = {...props.itemData, status: 2};
            tasksDispatch({ type: 'TICK_SUCCESS', payload: {itemData: newData} })
        })
        .catch(error => {
            console.log(error);
        })
        setTickingTask(null);
        // props.setArchivingProject(null);

        // console.log("archiving "+props.)

    }


    return (
        <>
            <div onClick={ tickTaskHandler } className="" id={props.id}>Zrobione</div>
        </>
    )
}
export default TickTask