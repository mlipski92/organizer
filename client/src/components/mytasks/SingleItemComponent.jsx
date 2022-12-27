import { Link } from 'react-router-dom';
import { TaskContext } from '../../contexts/TasksContext';

const SingleItem = (props) => {
 
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