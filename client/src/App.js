// import './App.css';
// import './index.css';
import './scss/index.scss';
import ProjectsPage from './pages/ProjectsPage';
import ArchivedProjectsPage from './pages/ArchivedProjectsPage';
import TasksPage from './pages/TasksPage';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import MainNavi from './components/MainNavi';
import ServicesPage from './pages/ServicesPage';

const MainLayout = () => {
  return (
    <>
            <div className="mainApp">
                <div className="mainApp__header">
                    <div className="mainApp__header-columns">
                        <div className="mainApp__header-column">
                            fsdf
                        </div>
                        <div className="mainApp__header-column userNavi">
                            <div className="userNavi__container">
                                <div className="userNavi__columns">
                                    <div className="userNavi__column userNavi__image">
                                        <img src="img/tymczasowe_user.jpg" alt="" className="userNavi__img" />
                                    </div>
                                    <div className="userNavi__column userNavi__info">
                                        <div className="userNavi__inside">
                                            <span className="userNavi__name">Mateusz Lipski</span>
                                            <a href="" className="userNavi__logout">Wyloguj</a>
                                        </div>
                                    </div>
                                </div>
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
                                <h2 className="mainApp__part-h2">Projekty</h2>
                            </div>
                            <div className="mainApp__part-body">
                                <Outlet />
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
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
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
