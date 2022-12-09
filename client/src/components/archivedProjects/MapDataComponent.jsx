import SingleItem from "./SingleItemComponent";

const MapData = (props) => {
       
    if (props.data !== null) {
        const mappedData = props.data.map( el => ( 
        <SingleItem 
            name={el.name} 
            id={el.id} key={el.id} 
            data={props.data} 
            projectsDispatch={props.projectsDispatch} 
            resumingProject={props.resumingProject}
            setResumingProject={props.setResumingProject}
        /> 
        ));
        return mappedData;
    }
}

export default MapData;