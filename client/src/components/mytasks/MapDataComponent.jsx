import SingleItem from "./SingleItemComponent";

const MapData = (props) => {
    if (props.data !== null) {
        const mappedData = props.data && props.data.map( el => ( 
        <SingleItem
            id={el.id} key={el.id} 
            data={props.data}
            elData={el}
        /> ));
        return mappedData;
    }
}

export default MapData;