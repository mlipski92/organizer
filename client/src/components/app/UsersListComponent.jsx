const UsersListComponent = () => {
    return (
        <>
            <div className="mainApp__part-inside">
                <div className="mainApp__part-header">
                    <h2 className="mainApp__part-h2">Użytkownicy</h2>
                </div>
                <div className="mainApp__part-body">
                    <div className="usersPart__list">
                        <div className="usersPart__item">
                            <div className="usersPart__columns">
                                <div className="usersPart__column">
                                    <img src="img/tymczasowe_user.jpg" alt="" className="usersPart__img" />
                                </div>
                                <div className="usersPart__column userInfo">
                                    <div className="userInfo__info">
                                        <span className="usersPart__title">Matusz Lipski</span>
                                        <span className="usersPart__status">Połączony</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersListComponent;