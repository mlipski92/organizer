const UserLoginButtonComponent = (props) => {
    return (
        <>
            <button className="userNavi__login-button" onClick={props.loginWithRedirect}>
                Zaloguj
            </button>
        </>
    )
}

export default UserLoginButtonComponent;



