import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import { usersObject } from './contexts/UsersContext';

import './scss/index.scss';

import ProjectsPage from './pages/ProjectsPage';
import ArchivedProjectsPage from './pages/ArchivedProjectsPage';
import TasksPage from './pages/TasksPage';
import ServicesPage from './pages/ServicesPage';
import ServiceTasksPage from './pages/ServiceTasksPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyTasksPage from './pages/MyTasksPage';
import MainLoginComponent from './components/app/MainLoginComponent';
import MainLayout from './components/app/MainLayout';
import DisallowedUsersPage from './pages/DisallowedUsersPage';


const StructureComponent = () => {
  const { isAuthenticated, user, loginWithRedirect, isLoading } = useAuth0();
  const [ currentUser, setCurrentUser ] = useState(usersObject.currentUser);
  const [ isAllowed, setIsAllowed ] = useState(null);


  useEffect(() => {

    (async () => {
      if (isAuthenticated) {
        await axios.post('http://localhost:8800/users/getcurrent', { socialident: user.email })
        .then(response => {
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
        //console.log('niezalogowany');
      }

      await setCurrentUser(user?.email)

      await axios.post('http://localhost:8800/users/checkifallowed', { socialident: user?.email })
      .then(response => {
        setIsAllowed(response.data[0].allowed);
      })
      .catch(error => {
        console.log(error);
      })
    })();
  }, [isAuthenticated, setCurrentUser,currentUser]);


  //NIE DZIAŁA LOGOWANIE. ZA KAŻDYM RAZEM WYŚWIETLA SIĘ PLANSZA W LOGOWANIEM< KTÓRA PRZEKIEROWUJE NA LOGOWANIE PO ZALOGOWANIU
  return (
    <>
        {isAllowed !== null ? (
          isAuthenticated ? (
            isAllowed ? <MainLayout currentUser={currentUser} setCurrentUser={setCurrentUser} /> : isLoading ? null : <div className="notAllowed"><span className="notAllowed__alert">Nie zostałeś dopuszczony do treści.</span></div>
          ) : <MainLoginComponent loginWithRedirect={loginWithRedirect} />
        ) : (
          <>
            <MainLoginComponent loginWithRedirect={loginWithRedirect} />
          </>
        )}
    </>

  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <StructureComponent />,
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
      },
      {
        path: '/mytasks',
        element: <MyTasksPage />
      },
      {
        path: '/disallowed-users',
        element: <DisallowedUsersPage />
      }
      ]
    }
  ]);

function MainApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default MainApp;
