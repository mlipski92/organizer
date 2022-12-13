import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AddServiceTask, AddServiceTaskModal } from '../components/servicetasks/AddComponent';
import DeleteModal from '../components/servicetasks/DeleteComponent';
import MapData from '../components/servicetasks/MapDataComponent';
import { ServiceTaskContext, serviceTaskObject } from '../contexts/ServiceTasksContext';
import serviceTasksReducer from '../reducers/serviceTasksReducer';

const initialServiceTasksState = {
    loading: true,
    error: '',
    serviceTasksData: { }
}

const ServiceTasksPage = () => {
    const { id } = useParams();
    const [servicetasks, servicetasksDispatch] = useReducer(serviceTasksReducer, initialServiceTasksState);
    const [addingServiceTask, setAddingServiceTask] = useState(serviceTaskObject.addingServiceTask);
    const [currentProject, setCurrentProject] = useState(serviceTaskObject.currentProject);
    const [deleteServiceTask, setDeleteServiceTask] = useState(serviceTaskObject.deleteServiceTask);
    const [tickingServiceTask, setTickingServiceTask] = useState(serviceTaskObject.tickingServiceTask);

    useEffect( () => {
        console.log(deleteServiceTask)
        axios.post(`http://localhost:8800/servicetasks/get/${id}`)
        .then(response => {
            servicetasksDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            setCurrentProject(id);
            console.log("data: "+JSON.stringify(servicetasks));
        }).catch(error => {
            console.log(error)
        });
        
    }, []);


    return (
        <>
       
            <div className="mainPart__projects">
                <div className="mainPart__list">
                    <ServiceTaskContext.Provider value={{setAddingServiceTask, addingServiceTask, servicetasksDispatch, currentProject, setCurrentProject}}>
                        <div className="mainPart__main-title"><AddServiceTask /></div>
                    </ServiceTaskContext.Provider>
                    <ServiceTaskContext.Provider value={{servicetasksDispatch, deleteServiceTask, setDeleteServiceTask, tickingServiceTask, setTickingServiceTask}}>
                        { servicetasks.loading ? 'Loading' : <MapData data={servicetasks.serviceTasksData} tasksDispatch={servicetasksDispatch} setDeleteServiceTask={setDeleteServiceTask} />}
                    </ServiceTaskContext.Provider>  
                </div>
            </div>

            <ServiceTaskContext.Provider value={{deleteServiceTask, setDeleteServiceTask, servicetasksDispatch, servicetasks}}>
                {deleteServiceTask !== null ? <DeleteModal /> : null}
            </ServiceTaskContext.Provider>

            {/* <TaskContext.Provider value={{deleteTask, setDeleteTask, tasksDispatch, tasks}}>
                {deleteTask !== null ? <DeleteModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{setAddingTask, addingTask, tasksDispatch, currentProject, setCurrentProject}}>
                { addingTask !== null ? <AddTaskModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{holdedTask, setHoldedTask, tasksDispatch, tasks}}>
                {holdedTask !== null ? <OnHoldModal /> : null}
            </TaskContext.Provider> */}

            <ServiceTaskContext.Provider value={{setAddingServiceTask, addingServiceTask, servicetasksDispatch, currentProject, setCurrentProject}}>
                { addingServiceTask !== null ? <AddServiceTaskModal /> : null}
            </ServiceTaskContext.Provider>
        </>
    )
}

export default ServiceTasksPage;