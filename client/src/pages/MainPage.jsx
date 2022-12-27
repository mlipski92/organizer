import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

import HoldedTasksComponent from "../components/main/HoldedTasksComponent";
import InProgressTasksComponent from "../components/main/InProgressTasksComponent";

const MainPage = () => {
    const { user } = useAuth0();
    const [ allTime, setAllTime ] = useState(0);
    const [ salary, setSalary ] = useState(0);

    useEffect(() => {
        axios.post(`http://localhost:8800/servicetasks/sumtimes`)
        .then(response => {
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
                            <Link to="/services" className="main-page__button">Zobacz obsługę</Link>
                        </div>
                    </div>
                </div>
                <div className="main-page__row">
                    <div className="main-page__col">
                        <HoldedTasksComponent />
                        <InProgressTasksComponent />
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainPage;