import axios from "axios";
import { useEffect, useReducer } from "react";
import MapData from "../components/mytasks/MapDataComponent";
import { TaskContext } from "../contexts/TasksContext";
import myTasksReducer from "../reducers/myTasksReducer";

const initialMyTasksState = {
    loading: true,
    error: '',
    myTasksData: {}
}


const MyTasksPage = () => {
    const [myTasks, myTasksDispatch] = useReducer(myTasksReducer, initialMyTasksState);

    useEffect(() => {
        axios.post('http://localhost:8800/tasks/mytasks', {userid: 13})
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
                        {console.log("mytasks: "+myTasks)}
                        {JSON.stringify(myTasks.myTasksData) === "[]" ? <span className="emptyTable">Brak zadań na ten moment...</span> : null}
                        {myTasks.loading ? 'Loading' : <MapData data={myTasks.myTasksData} />}
                    </TaskContext.Provider>
                </div>
            </div>
        </>
    )
}

export default MyTasksPage;