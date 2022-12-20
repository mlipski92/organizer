import axios from 'axios';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { TaskContext, taskObject } from '../contexts/TasksContext';
import { UsersContext, usersObject } from '../contexts/UsersContext';

import tasksReducer from '../reducers/tasksReducer';
import projectsReducer from '../reducers/projectsReducer';


import { AddTask, AddTaskModal } from '../components/tasks/AddComponent';
import DeleteModal from '../components/tasks/DeleteComponent';
import OnHoldModal from '../components/tasks/HoldComponent';
import MapData from '../components/tasks/MapDataComponent';
import MessageComponent from '../components/tasks/MessageComponent';


const initialTasksState = {
    loading: true,
    error: '',
    tasksData: { }
}

const initialProjectsState = {
    loading: true,
    error: '',
    projectsData: {}
}

const TasksPage = () => {
    const { id } = useParams();
    const [tasks, tasksDispatch] = useReducer(tasksReducer, initialTasksState);
    const [projects, projectsDispatch] = useReducer(projectsReducer, initialProjectsState);
    const [deleteTask, setDeleteTask] = useState(taskObject.deleteTask);
    const [addingTask, setAddingTask] = useState(taskObject.addingTask);
    const [tickingTask, setTickingTask] = useState(taskObject.tickingTask);
    const [currentProject, setCurrentProject] = useState(taskObject.currentProject);
    const [holdedTask, setHoldedTask] = useState(taskObject.holdedTask);
    const [currentProjectName, setCurrentProjectName] = useState(null);
    const {currentUser, setCurrentUser} = useContext(UsersContext);
    const [message, setMessage] = useState(taskObject.message);


    useEffect( () => {
        axios.post(`http://localhost:8800/tasks/get/${id}`)
        .then(response => {
            tasksDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            setCurrentProject(id);
        }).catch(error => {
            console.log(error)
        })
        
    }, []);

    useEffect(() => {
        axios.post('http://localhost:8800/projects/all')
        .then(response => {
            projectsDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            currentProjectNameHandler(id, response.data);
        })
        .catch(error => {
            projectsDispatch({ type: 'FETCH_ERROR' })
        })
    },[])

    const currentProjectNameHandler = (id, data) => {
        data.forEach(el => {
            if (el.id === parseInt(id)) {
                setCurrentProjectName(el.name);
            }
        });
    }




    return (
        <>
            <div className="mainPart__projects">
                <TaskContext.Provider value={{setAddingTask, addingTask, tasksDispatch, currentProject, setCurrentProject, setMessage, currentProjectName}}>
                    <div className="mainPart__main-title"><AddTask /></div>
                </TaskContext.Provider>
                <div className="mainPart__list">
                    <TaskContext.Provider value={{holdedTask, setHoldedTask, tasksDispatch, setDeleteTask, tickingTask, setTickingTask, setMessage}}>
                        { tasks.loading ? 'Loading' : <MapData data={tasks.tasksData} />}
                    </TaskContext.Provider>  
                </div>
            </div>

            <TaskContext.Provider value={{deleteTask, setDeleteTask, tasksDispatch, tasks, setMessage}}>
                {deleteTask !== null ? <DeleteModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{setAddingTask, addingTask, tasksDispatch, currentProject, setCurrentProject, setMessage}}>
                { addingTask !== null ? <AddTaskModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{holdedTask, setHoldedTask, tasksDispatch, tasks, setMessage}}>
                {holdedTask !== null ? <OnHoldModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{message, setMessage}}>
                <MessageComponent />
            </TaskContext.Provider>
        </>
    )
}

export default TasksPage;