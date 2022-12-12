import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MapData from '../components/servicetasks/MapDataComponent';
import { ServiceTaskContext } from '../contexts/ServiceTasksContext';
import serviceTasksReducer from '../reducers/serviceTasksReducer';

const initialServiceTasksState = {
    loading: true,
    error: '',
    serviceTasksData: { }
}

const ServiceTasksPage = () => {
    const { id } = useParams();
    const [servicetasks, servicetasksDispatch] = useReducer(serviceTasksReducer, initialServiceTasksState);

    useEffect( () => {
        axios.post(`http://localhost:8800/servicetasks/get/${id}`)
        .then(response => {
            servicetasksDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            // setCurrentProject(id);
            console.log("data: "+JSON.stringify(servicetasks));
        }).catch(error => {
            console.log(error)
        })
        
    }, []);


    return (
        <>
       
            <div className="mainPart__projects">
                <div className="mainPart__list">
                    <ServiceTaskContext.Provider value={{servicetasksDispatch}}>
                        { servicetasks.loading ? 'Loading' : <MapData data={servicetasks.serviceTasksData} tasksDispatch={servicetasksDispatch} />}
                    </ServiceTaskContext.Provider>  
                </div>
            </div>

            {/* <TaskContext.Provider value={{deleteTask, setDeleteTask, tasksDispatch, tasks}}>
                {deleteTask !== null ? <DeleteModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{setAddingTask, addingTask, tasksDispatch, currentProject, setCurrentProject}}>
                { addingTask !== null ? <AddTaskModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{holdedTask, setHoldedTask, tasksDispatch, tasks}}>
                {holdedTask !== null ? <OnHoldModal /> : null}
            </TaskContext.Provider> */}
        </>
    )
}

export default ServiceTasksPage;