import { useAuth0 } from "@auth0/auth0-react";
import UserBasicPanelComponent from "./UserBasicPanelComponent";
import UserLoginButtonComponent from "./UserLoginButtonComponent";

const HeaderComponent = () => {
    const { isAuthenticated, user, logout, loginWithRedirect, isLoading, error } = useAuth0();
    return (
        <>
            <div className="mainApp__header">
                <div className="mainApp__header-columns">
                    <div className="mainApp__header-column">
                        <a href="/">LOGO</a>
                    </div>
                    <div className="mainApp__header-column userNavi">
                        <div className="userNavi__container">
                          { isAuthenticated ? <UserBasicPanelComponent img={user?.picture} name={user?.given_name} surname={user?.family_name} logout={logout} /> : <UserLoginButtonComponent loginWithRedirect={loginWithRedirect} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;