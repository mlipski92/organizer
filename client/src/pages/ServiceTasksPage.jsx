import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ServiceTaskContext, serviceTaskObject } from '../contexts/ServiceTasksContext';
import serviceTasksReducer from '../reducers/serviceTasksReducer';

import { AddServiceTask, AddServiceTaskModal } from '../components/servicetasks/AddComponent';
import DeleteModal from '../components/servicetasks/DeleteComponent';
import MapData from '../components/servicetasks/MapDataComponent';
import SumTimeComponent from '../components/servicetasks/SumTimeComponent';
import MessageComponent from '../components/servicetasks/MessageComponent';


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
    const [message, setMessage] = useState(serviceTaskObject.message);

    useEffect( () => {
        axios.post(`http://localhost:8800/servicetasks/get/${id}`)
        .then(response => {
            servicetasksDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            setCurrentProject(id);
        }).catch(error => {
            console.log(error)
        });
        
    }, []);


    return (
        <>
       
            <div className="mainPart__projects">
                <div className="mainPart__list">
                    <ServiceTaskContext.Provider value={{setAddingServiceTask, addingServiceTask, servicetasksDispatch, currentProject, setCurrentProject, setMessage}}>
                        <div className="mainPart__main-title"><AddServiceTask /></div>
                    </ServiceTaskContext.Provider>
                    <ServiceTaskContext.Provider value={{servicetasksDispatch, deleteServiceTask, setDeleteServiceTask, tickingServiceTask, setTickingServiceTask, setMessage}}>
                        { servicetasks.loading ? 'Loading' : <MapData data={servicetasks.serviceTasksData} />}
                    </ServiceTaskContext.Provider>  
                </div>
            </div>

            <ServiceTaskContext.Provider value={{deleteServiceTask, setDeleteServiceTask, servicetasksDispatch, servicetasks, setMessage}}>
                {deleteServiceTask !== null ? <DeleteModal /> : null}
            </ServiceTaskContext.Provider>

            <ServiceTaskContext.Provider value={{setAddingServiceTask, addingServiceTask, servicetasksDispatch, currentProject, setCurrentProject, setMessage}}>
                { addingServiceTask !== null ? <AddServiceTaskModal /> : null}
            </ServiceTaskContext.Provider>

            <ServiceTaskContext.Provider value={{message, setMessage}}>
                <MessageComponent />
            </ServiceTaskContext.Provider>

            { servicetasks.loading ? 'Loading' : <SumTimeComponent allTasks={servicetasks.serviceTasksData} /> }
            
        </>
    )
}

export default ServiceTasksPage;