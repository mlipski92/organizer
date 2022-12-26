import { useContext } from "react";

import { TaskContext } from "../../contexts/TasksContext";





const MapData = (props) => {
    console.log(props.data)
    
    // if (props.data !== null) {
    //     const mappedData = props.data && props.data.map( el => ( 
    //     <SingleItem 
    //         id={el.id} key={el.id} 
    //         data={props.data}
    //         elData={el}
    //     /> ));
    //     return mappedData;
    // }
}

export default MapData;