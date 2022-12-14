import SingleItem from "./SingleItemComponent";

const MapData = (props) => {
    
       
    if (props.data !== null) {
        const mappedData = props.data.map( el => ( 
        <SingleItem 
            name={el.name} 
            id={el.id} key={el.id} 
            elData={el}
            data={props.data} 
        /> 
        ));
        return mappedData;
    }
}

export default MapData;