// import './App.css';
// import './index.css';
import './scss/index.scss';
import ProjectsPage from './pages/ProjectsPage';
import ArchivedProjectsPage from './pages/ArchivedProjectsPage';
import TasksPage from './pages/TasksPage';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import MainNavi from './components/layout/MainNavi';
import ServicesPage from './pages/ServicesPage';
import ServiceTasksPage from './pages/ServiceTasksPage';
import LoginPage from './pages/LoginPage';
import { useContext, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import { UsersContext, usersObject } from './contexts/UsersContext';
import MainPage from './pages/MainPage';

const UserBasicPanel = (props) => {
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
  )
}

const UserLoginButton = (props) => {
  return (
    <>
      <button className="userNavi__login-button" onClick={props.loginWithRedirect}>
          Zaloguj
      </button>
    </>
  )
}

const MainLogin = (props) => {
  const { loginWithRedirect, isLoading, error } = useAuth0();
  return (
    <>
      {isLoading && <>
        <div className="loading-page">
          <div className="loading-page__spinner">
            <div className="lds-dual-ring"></div>          
          </div>
        </div>
      </>}
      {error && <p>Error</p>}
      {!isLoading && !error && <>
        <div className="main-login">
          <div className="main-login__inside">
            <h1 className="main-login__title">Aplikacja Organizer</h1>
            <button className="main-login__button" onClick={loginWithRedirect}>Zaloguj się</button>
          </div>
        </div>
      </>}
      
    </>
  )
}



const MainLayout = () => {
  const { isAuthenticated, user, logout, loginWithRedirect, isLoading, error } = useAuth0();
  const [ currentUser, setCurrentUser ] = useState(usersObject.currentUser);


  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        await axios.post('http://localhost:8800/users/getcurrent', { socialident: user.email })
        .then(response => {
            console.log("sprawdzanie");
            if (response.data.length === 0) {
              axios.post('http://localhost:8800/users/add', { name: user.given_name + " " + user.family_name, img: user.picture, socialident: user.email })
              .then(response => {
                console.log("Dodano użytkownika!");
              })
              .catch(error => {
                console.log(error);
              })
            }    
        })
        .catch(error => {
            
        })
      } else {
        console.log('niezalogowany');
      }

      setCurrentUser(user?.email)
    })();
  }, [isAuthenticated, setCurrentUser])

  return (
    isAuthenticated ? (
    <>
            <div className="mainApp">
                <div className="mainApp__header">
                    <div className="mainApp__header-columns">
                        <div className="mainApp__header-column">
                            Test: {isAuthenticated ? 'zalogowany' : 'niezalogowany'}
                        </div>
                        <div className="mainApp__header-column userNavi">
                            <div className="userNavi__container">
                              { isAuthenticated ? <UserBasicPanel img={user?.picture} name={user?.given_name} surname={user?.family_name} logout={logout} /> : <UserLoginButton loginWithRedirect={loginWithRedirect} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainApp__parts">
                    <div className="mainApp__part naviPart">
                      <MainNavi />
                    </div>
                    <div className="mainApp__part mainPart">

                        <div className="mainApp__part-inside">
                            <div className="mainApp__part-header">
                                <h2 className="mainApp__part-h2"></h2>
                            </div>
                            <div className="mainApp__part-body">
                              <UsersContext.Provider value={{currentUser, setCurrentUser}}>
                                <Outlet />
                              </UsersContext.Provider> 
                            </div>
                        </div>


                    </div>
                    <div className="mainApp__part usersPart">

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

                    </div>
                </div>
                <div className="mainApp__footer">
                    <p>Created by Me!</p>
                </div>
            </div>
    </>
    ) : <MainLogin loginWithRedirect={loginWithRedirect} />
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/tasks/:id',
        element: <TasksPage />
      },
      {
        path: '/projects/archived',
        element: <ArchivedProjectsPage />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/servicetasks/:id',
        element: <ServiceTasksPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
