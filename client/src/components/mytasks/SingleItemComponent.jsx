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
                        <Link to={"/tasks/"+props.elData.projectid} className="main-page__my-tasks-title">{props.elData.title}</Link>
                        <span className="main-page__my-tasks-desc">{props.elData.name}</span>
                    </div>    
                )
            }
        </TaskContext.Consumer>

    

    </>
)}

export default SingleItem;