import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AddTask, AddTaskModal } from '../components/tasks/AddComponent';
import DeleteModal from '../components/tasks/DeleteComponent';
import OnHoldModal from '../components/tasks/HoldComponent';
import MapData from '../components/tasks/MapDataComponent';
import { TaskContext, taskObject } from '../contexts/TasksContext';
import tasksReducer from '../reducers/tasksReducer';

const initialTasksState = {
    loading: true,
    error: '',
    tasksData: { }
}

const TasksPage = () => {
    const { id } = useParams();
    const [tasks, tasksDispatch] = useReducer(tasksReducer, initialTasksState);
    const [deleteTask, setDeleteTask] = useState(taskObject.deleteTask);
    const [addingTask, setAddingTask] = useState(taskObject.addingTask);
    const [tickingTask, setTickingTask] = useState(taskObject.tickingTask);
    const [currentProject, setCurrentProject] = useState(taskObject.currentProject);
    const [holdedTask, setHoldedTask] = useState(taskObject.holdedTask);

    useEffect( () => {
        axios.post(`http://localhost:8800/tasks/get/${id}`)
        .then(response => {
            tasksDispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            setCurrentProject(id);
        }).catch(error => {
            console.log(error)
        })
        
    }, []);


    return (
        <>
            <div className="mainPart__projects">
                <TaskContext.Provider value={{setAddingTask, addingTask, tasksDispatch, currentProject, setCurrentProject}}>
                    <div className="mainPart__main-title"><AddTask /></div>
                </TaskContext.Provider>
                <div className="mainPart__list">
                    <TaskContext.Provider value={{holdedTask, setHoldedTask, tasksDispatch, setDeleteTask, tickingTask, setTickingTask}}>
                        { tasks.loading ? 'Loading' : <MapData data={tasks.tasksData} tasksDispatch={tasksDispatch} />}
                    </TaskContext.Provider>  
                </div>
            </div>

            <TaskContext.Provider value={{deleteTask, setDeleteTask, tasksDispatch, tasks}}>
                {deleteTask !== null ? <DeleteModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{setAddingTask, addingTask, tasksDispatch, currentProject, setCurrentProject}}>
                { addingTask !== null ? <AddTaskModal /> : null}
            </TaskContext.Provider>

            <TaskContext.Provider value={{holdedTask, setHoldedTask, tasksDispatch, tasks}}>
                {holdedTask !== null ? <OnHoldModal /> : null}
            </TaskContext.Provider>
        </>
    )
}

export default TasksPage;