import { Link } from 'react-router-dom';

const MainNavi = () => {
    return (
        <div className="mainApp__part-inside">
            <div className="mainApp__part-header">
                <h2 className="mainApp__part-h2">Menu</h2>
            </div>
            <div className="mainApp__part-body">
                <ul className="naviPart__list">
                    <li className="naviPart__item active">
                        <Link to="/projects"><span className="naviPart__a">Projekty</span></Link>
                    </li>
                    <li className="naviPart__item">
                        <Link to="/projects/archived"><span className="naviPart__a">Archiwum projektów</span></Link>
                    </li>
                    <li className="naviPart__item">
                        <a href="/services" className="naviPart__a">Bieżąca obsługa</a>
                    </li>
                    <li className="naviPart__item">
                        <a href="" className="naviPart__a">Oczekujący użytkownicy</a>
                    </li>
                    <li className="naviPart__item">
                        <Link to="/mytasks"><span className="naviPart__a">Moje zadania</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainNavi;