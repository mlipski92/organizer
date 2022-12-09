import SingleItem from "./SingleItemComponent";

const MapData = (props) => {
    
       
    if (props.data !== null) {
        const mappedData = props.data.map( el => ( 
        <SingleItem 
            name={el.name} 
            deleteProjectHandler={props.deleteProjectHandler} 
            id={el.id} key={el.id} 
            data={props.data} 
            askDeleteProjectHandler={props.askDeleteProjectHandler} 
            archiveProjectHandler={props.archiveProjectHandler} 
            editButtonHandler={props.editButtonHandler} 
        /> 
        ));
        return mappedData;
    }
}

export default MapData;