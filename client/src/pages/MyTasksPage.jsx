import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../contexts/UsersContext";

const MyTaskItem = (props) => {
    return (
        <>
            <div className="main-page__my-tasks-item">
                <Link to={"/tasks/"+props.projectid} className="main-page__my-tasks-title">{props.title}</Link>
                <span className="main-page__my-tasks-desc">Projekt</span>
            </div>
        </>
    )
}

const MapMyTasks = (props) => {
    return props.data.map( el => (
        <>
            <MyTaskItem projectid={el.projectid} title={el.title} key={el.id} />
        </>
    ));
}


const MyTasksPage = () => {
    const [ myTasks, setMyTasks ] = useState(null);
    const { user, isLoading, error } = useAuth0();
    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const [ currentUserId, setCurrentUserId ] = useState(null);
    

    // axios.post('http://localhost:8800/users/getcurrent', { socialident: currentUser })
    // axios.post(`http://localhost:8800/tasks/mytasks`, {userid: currentUserId})

    //ZROBIĆ POPRZEZ REDUCER

    useEffect(() => {
        console.log("Current user: "+currentUser);
        (async () => {
            await axios.post('http://localhost:8800/users/getcurrent', { socialident: currentUser })
            .then( response => { (async () => {
                await setCurrentUserId(13);
                console.log("cid"+currentUserId);
            })()
                
            })
            .catch(error => {
                console.log(error)
            })
            
        })();

        


        


    }, [setCurrentUserId]);


    return (
        <>
            <div className="main-page__my-tasks">
                <div className="main-page__my-tasks-header">
                    <h2 className="main-page__my-tasks-header-title">
                        Moje zadania
                    </h2>
                </div>
                <div className="main-page__my-tasks-items">
                    {myTasks !== null ? <MapMyTasks data={myTasks} /> : <p>brak</p>}
                </div>
            </div>
        </>
    )
}

export default MyTasksPage;