import { useState } from "react";
import { Outlet } from "react-router-dom";

import { UsersContext, usersObject } from "../../contexts/UsersContext";

import MainNaviComponent from "./MainNaviComponent";
import HeaderComponent from "./HeaderComponent";
import UsersListComponent from "./UsersListComponent";

const MainLayout = (props) => {
    return (
        <>
                <div className="mainApp">
                    <HeaderComponent />
                    <div className="mainApp__parts">
                        <div className="mainApp__part naviPart">
                          <MainNaviComponent />
                        </div>
                        <div className="mainApp__part mainPart">

                            <div className="mainApp__part-inside">
                                <div className="mainApp__part-header">
                                    <h2 className="mainApp__part-h2"></h2>
                                </div>
                                <div className="mainApp__part-body">
                                  <UsersContext.Provider value={{currentUser: props.currentUser, setCurrentUser: props.setCurrentUser}}>
                                    <Outlet />
                                  </UsersContext.Provider> 
                                </div>
                            </div>


                        </div>
                        <div className="mainApp__part usersPart">
                            <UsersListComponent />
                        </div>
                    </div>
                    <div className="mainApp__footer">
                        <p>Stworzone przez Mateusza Lipskiego</p>
                    </div>
                </div>
        </>
    );
}

export default MainLayout;