import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InProgressItem = (props) => {
    const {projectid,tasktitle,projectname,username} = props.elData;
    return (
        <>
        <div className="main-page__inprogress-tasks-item">
            <Link to={"/tasks/"+projectid} className="main-page__inprogress-tasks-title">{tasktitle}</Link>
            <span className="main-page__inprogress-tasks-desc">Projekt: <strong>{projectname}</strong></span>
            <span className="main-page__holded-tasks-user">{username}</span>
        </div>
        </>
    )
}

const MapInProgressTasks = (props) => {
    return props.data.map( el => <InProgressItem elData={el} key={el.id} />);
}

const InProgressTasksComponent = () => {
    const [ inProgressTasks, setInProgressTasks ] = useState(null);

    useEffect(() => {
        axios.post(`http://localhost:8800/tasks/getinprogress`)
        .then(response => {
            setInProgressTasks(response.data)

        }).catch(error => {
            console.log(error)
        });
    }, []);

    console.log("inprogress "+(JSON.stringify(inProgressTasks) === "[]"));

    return (
        <>
            <div className="main-page__inprogress-tasks">
                <div className="main-page__inprogress-tasks-header">
                    <h2 className="main-page__inprogress-tasks-header-title">
                        Zadania w toku
                    </h2>
                </div>
                <div className="main-page__inprogress-tasks-items">
                    {inProgressTasks !== null ? (
                        <>
                            { JSON.stringify(inProgressTasks) === "[]" ? (
                                <span className="emptyTable">Brak zadań na ten moment</span>
                            ) : <MapInProgressTasks data={inProgressTasks} /> }
                        </>
                    ) : <span className="emptyTable">Ładowanie</span>}
                </div>
            </div>
        </>
    )
}

export default InProgressTasksComponent;