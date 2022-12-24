const UserBasicPanelComponent = (props) => {
    return (
        <>
            <div className="userNavi__columns">
                <div className="userNavi__column userNavi__image">
                    <img src={props.img} alt="" className="userNavi__img" />
                </div>
                <div className="userNavi__column userNavi__info">
                    <div className="userNavi__inside">
                        <span className="userNavi__name">{props.name + " " + props.surname}</span>
                        <span onClick={ () => { props.logout() }} className="userNavi__logout">Wyloguj</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserBasicPanelComponent;