import axios from "axios";
import { useContext } from "react";

import { TaskContext } from "../../contexts/TasksContext";

const TickTask = (props) => {
    const { tasksDispatch } = useContext(TaskContext);
    const { setTickingTask } = useContext(TaskContext);
    const { setMessage } = useContext(TaskContext);

    const tickTaskHandler = async e => {
        await setTickingTask(props.id);

        await axios.post("http://netcentrum.pl/api/tasks/tick/" + props.id)
        .then(response => {
            const newData = {...props.itemData, status: 2};
            setMessage({msg: "Zadanie zostało zrobione!", type: "SUCCESS"});
            tasksDispatch({ type: 'TICK_SUCCESS', payload: {itemData: newData} })
        })
        .catch(error => {
            console.log(error);
        })
        setTickingTask(null);

    }

    return (
        <>
            <div className="buttons-list__item" id={props.id} onClick={ tickTaskHandler }>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.891 166.002">
                    <path id="Path_15" data-name="Path 15" d="M980.268,794.981s8.089,1.755,12.9,8.089,23.045,38.077,23.045,38.077,17.579-40.032,28.308-58.306,26.443-47.51,41.124-63.778,39.519-43.918,39.519-43.918-18.919,13.591-24.608,18.332-34.553,30.745-42.191,40.268-23.152,30.866-28.646,40.1-12.057,21.747-12.057,21.747-7.05-13.661-12.423-18.583a79.133,79.133,0,0,0-8.8-7.179Z" transform="translate(-980.268 -675.145)" fill="#fff"/>
                </svg>
                <span>Zrobione</span>
            </div>
        </>
    )
}
export default TickTask