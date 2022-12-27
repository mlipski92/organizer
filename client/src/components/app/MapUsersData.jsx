const SingleItem = (props) => {
    return (
        <>
            <div className="usersPart__item">
                <div className="usersPart__columns">
                    <div className="usersPart__column">
                        <img src={props.elData.img} alt="" className="usersPart__img" />
                    </div>
                    <div className="usersPart__column userInfo">
                        <div className="userInfo__info">
                            <span className="usersPart__title">{props.elData.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const MapUsersData = (props) => {

    if (JSON.stringify(props.data) !== "{}") {
        const testMap = props.data.map( el => (
            <SingleItem 
            name={el.name} 
            id={el.id} key={el.id} 
            elData={el}
            data={props.data} 
            /> 
        ));
        return testMap;
    }
}

export default MapUsersData;