import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props) => {
    return (
        !props.isAuthenticated && (
            <button onClick={props.loginWithRedirect}>
                Zaloguj
            </button>
        )
        
    )
}

const LogoutButton = (props) => {
    return (
        props.isAuthenticated && (
            <button onClick={() => props.logout()}>
                Wyloguj
            </button>
        )
        
    )
}

const LoginPage = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <>
            <LoginButton loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated} />
            <LogoutButton isAuthenticated={isAuthenticated} logout={logout} />
        </>
    )
    

}

export default LoginPage;