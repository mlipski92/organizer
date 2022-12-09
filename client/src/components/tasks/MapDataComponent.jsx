import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";
import SingleItem from "./SingleItemComponent";



const MapData = (props) => {
    const { tasks } = useContext(TaskContext);
    
    if (props.data !== null) {
        const mappedData = props.data && props.data.map( el => ( 
        <SingleItem 
            title={el.title} 
            id={el.id} key={el.id} 
            prior={el.prior} 
            data={props.data} tasksDispatch={props.tasksDispatch}
            itemData={el}
            status={el.status}
            whyholded={el.whyholded}
        /> ));
        return mappedData;
    }
}

export default MapData;