import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HoldedTaskItem = (props) => {
    const {tasktitle,taskwhyholded,username,projectid} = props.elData;
    return (
        <>
            <div className="main-page__holded-tasks-item">
                <Link to={"/tasks/"+projectid} className="main-page__holded-tasks-title">{tasktitle}</Link>
                <span className="main-page__holded-tasks-desc">{taskwhyholded}</span>
                <span className="main-page__holded-tasks-user">{username}</span>
            </div>
        </>
    )
}

const MapHoldedTasks = (props) => {
    console.log(props.data)
    return props.data.map( el => <HoldedTaskItem elData={el} key={el.id} />);
}

const HoldedTasksComponent = () => {
    const [ holdedTasks, setHoldedTasks ] = useState(null);

    useEffect(() => {
        axios.post(`http://localhost:8800/tasks/getholded`)
        .then(response => {
            setHoldedTasks(response.data)

        }).catch(error => {
            console.log(error)
        });
    }, []);


    return (
        <>
            <div className="main-page__holded-tasks">
                <div className="main-page__holded-tasks-header">
                    <h2 className="main-page__holded-tasks-header-title">
                        Wstrzymane zadania
                    </h2>
                </div>
                <div className="main-page__holded-tasks-items">
                    {holdedTasks !== null ? <MapHoldedTasks data={holdedTasks} /> : <p>brak</p>}
                </div>
            </div>
        </>
    )
}

export default HoldedTasksComponent;