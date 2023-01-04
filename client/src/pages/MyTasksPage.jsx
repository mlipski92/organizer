import axios from "axios";
import { useEffect, useReducer } from "react";

import { TaskContext } from "../contexts/TasksContext";
import myTasksReducer from "../reducers/myTasksReducer";

import MapData from "../components/mytasks/MapDataComponent";


const initialMyTasksState = {
    loading: true,
    error: '',
    myTasksData: {}
}


const MyTasksPage = () => {
    const [myTasks, myTasksDispatch] = useReducer(myTasksReducer, initialMyTasksState);

    useEffect(() => {
        axios.post('http://netcentrum.pl/api/tasks/mytasks', {userid: 13})
        .then(response => {
            myTasksDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            myTasksDispatch({ type: 'FETCH_ERROR' })
        })
    },[])

    return (
        <>
            <div className="main-page__my-tasks">
                <div className="main-page__my-tasks-header">
                    <h2 className="main-page__my-tasks-header-title">
                        Moje zadania
                    </h2>
                </div>
                <div className="main-page__my-tasks-items">
                    <TaskContext.Provider value={{myTasksDispatch}}>
                        {JSON.stringify(myTasks.myTasksData) === "[]" ? <span className="emptyTable">Brak zadań na ten moment...</span> : null}
                        {myTasks.loading ? <span className="loadingText">Ładowanie...</span> : <MapData data={myTasks.myTasksData} />}
                    </TaskContext.Provider>
                </div>
            </div>
        </>
    )
}

export default MyTasksPage;