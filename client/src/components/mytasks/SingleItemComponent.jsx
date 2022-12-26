import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContext';

const SingleItem = (props) => {
    const { myTasksDispatch } = useContext(TaskContext);
 
    return(
    <>
        <TaskContext.Consumer>
            {
                () => (
                    <div className="main-page__my-tasks-item">
                        <Link to={"/tasks/"+props.projectid} className="main-page__my-tasks-title">{props.title}</Link>
                        <span className="main-page__my-tasks-desc">Projekt</span>
                    </div>    
                )
            }
        </TaskContext.Consumer>

    

    </>
)}

export default SingleItem;