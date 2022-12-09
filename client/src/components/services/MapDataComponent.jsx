import SingleItem from "./SingleItemComponent";

const MapData = (props) => {
    // { console.log("mapdata: " + JSON.stringify(props.data)) }
    if (props.data !== null) {
        const mappedData = props.data.map( el => ( 
        <SingleItem 
            id={el.id} 
            key={el.id} 
            data={props.data} 
            elData={el}
        /> 
        ));
        return mappedData;
    }
}

export default MapData;