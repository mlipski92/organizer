import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
    const { user } = useAuth0();
    const [ allTime, setAllTime ] = useState(0);
    const [ salary, setSalary ] = useState(0);

    useEffect(() => {
        axios.post(`http://localhost:8800/servicetasks/sumtimes`)
        .then(response => {
            // setAllTime(response.data);
            const minutes = Object.values(response.data[0]);
            const pricePerHour = 120;
            const hours = minutes/60;
            const totalSalary = hours*pricePerHour;
            setSalary(totalSalary);
            setAllTime(hours.toFixed(1));

        }).catch(error => {
            console.log(error)
        });
    });

    return (
        <>
            <div className="main-page">
                <div className="main-page__row">
                    <div className="main-page__col">
                        <div className="main-page__user-info">
                            <h1 className="main-page__title">{user.given_name} {user.family_name}</h1>
                            <h2 className="main-page__subtitle">Witaj ponownie!</h2>
                        </div>
                    </div>
                    <div className="main-page__col">
                        <div className="main-page__service-preview">
                            <span>Niezafakturowane minuty: <strong>{allTime} godz.</strong></span>
                            <span>Do ściągnięcia: <strong>{salary}zł</strong></span>
                            <Link to="/" className="main-page__button">Zobacz obsługę</Link>
                        </div>
                    </div>
                </div>
                <div className="main-page__row">

                    <div className="main-page__col">

                        <div className="main-page__holded-tasks">
                            <div className="main-page__holded-tasks-header">
                                <h2 className="main-page__holded-tasks-header-title">
                                    Wstrzymane zadania
                                </h2>
                            </div>

                            <div className="main-page__holded-tasks-items">
                                <div className="main-page__holded-tasks-item">
                                    <Link to="/" className="main-page__holded-tasks-title">Dodawanie przycisku do stopki</Link>
                                    <span className="main-page__holded-tasks-desc">Dodawanie przycisku do stopki</span>
                                </div>

                                <div className="main-page__holded-tasks-item">
                                    <Link to="/" className="main-page__holded-tasks-title">Dodawanie przycisku do stopki</Link>
                                    <span className="main-page__holded-tasks-desc">Dodawanie przycisku do stopki</span>
                                </div>

                            </div>
                        </div>

                        <div className="main-page__inprogress-tasks">
                            <div className="main-page__inprogress-tasks-header">
                                <h2 className="main-page__inprogress-tasks-header-title">
                                    Wstrzymane zadania
                                </h2>
                            </div>

                            <div className="main-page__inprogress-tasks-items">
                                <div className="main-page__inprogress-tasks-item">
                                    <Link to="/" className="main-page__inprogress-tasks-title">Dodawanie przycisku do stopki</Link>
                                    <span className="main-page__inprogress-tasks-desc">Dodawanie przycisku do stopki</span>
                                </div>

                                <div className="main-page__inprogress-tasks-item">
                                    <Link to="/" className="main-page__inprogress-tasks-title">Dodawanie przycisku do stopki</Link>
                                    <span className="main-page__inprogress-tasks-desc">Dodawanie przycisku do stopki</span>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default MainPage;