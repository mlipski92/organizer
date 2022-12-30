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
                        <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" className="logoSVG" viewBox="0 0 131 131">
                            <g id="Group_5" data-name="Group 5" transform="translate(-1568 -580)">
                            <path id="Exclusion_1" data-name="Exclusion 1" d="M65.5,131A65.517,65.517,0,0,1,40,5.147,65.517,65.517,0,0,1,91,125.852,65.089,65.089,0,0,1,65.5,131ZM66,7.054A58.95,58.95,0,1,0,124.954,66,59.017,59.017,0,0,0,66,7.054Z" transform="translate(1568 580)" fill="#e84a1d"/>
                            <path id="Subtraction_1" data-name="Subtraction 1" d="M52,104A52.014,52.014,0,0,1,31.759,4.086,52.014,52.014,0,0,1,72.241,99.914,51.675,51.675,0,0,1,52,104ZM39.752,56.433V70.053l12.291,8.139,12.126-8.139V56.2L52.043,64.43ZM24,45.824V68.843l11.549,9.3v-24.7Zm55.942,0L68.27,54.005V78.066L79.94,69.685ZM24,26.857V41.373L51.989,59.539,79.941,41.173V27.418L51.989,45.785Z" transform="translate(1582 594)" fill="#e84a1d"/>
                            </g>
                        </svg> 
                        </a>
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