import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ServicesContext } from '../../contexts/ServicesContext';

const SingleItem = (props) => {
    const { servicesDispatch } = useContext(ServicesContext);
    const { deleteService, setDeleteService } = useContext(ServicesContext);

    const askDeleteServiceHandler = (id) => {
        setDeleteService(id);
    }
 
    return(
    <>
        <ServicesContext.Consumer>
            {
                () => (
                    <div className="mainPart__item">
                        <div className="mainPart__a">
                            <div className="mainPart__columns">
                                <div className="mainPart__column item-info">
                                    <div className="mainPart__rows">
                                        <div className="mainPart__row">
                                                <span className="mainPart__item-basic-info">
                                                    <strong className="mainPart__item-title--project">{props.elData.name} ({props.elData.id})</strong>
                                                    Jakub Lipiński | Mateusz Lipski
                                                </span>
                                                <div className="buttons-list">
                                                    <div className="buttons-list__item" onClick={() => {askDeleteServiceHandler(props.id)}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.149 186.187">
                                                            <g id="Group_1" data-name="Group 1" transform="translate(-329.68 -235.728)">
                                                                <path id="Exclusion_1" data-name="Exclusion 1" d="M76.273,158.207c-17.028,0-37.988-.29-43.99-.53l-2.026-.078H30.23c-8.584-.325-14.787-.559-14.787-3.792,0-3.428-5.749-123.443-5.807-124.655H2.4c-.007,0-.073.008-.18.008A2.425,2.425,0,0,1,.9,28.789,2.274,2.274,0,0,1,0,26.754v-6.3a2.489,2.489,0,0,1,.56-1.717,2.378,2.378,0,0,1,1.837-.68H9.636L9.259,0H124.07l-.232,19.566h7.319a1.581,1.581,0,0,1,.168-.008,1.755,1.755,0,0,1,1.819,1.994v6.59a1.572,1.572,0,0,1-.354,1.129,2.08,2.08,0,0,1-1.633.578c-2.19,0-7.268-.69-7.319-.7l-6.775,125.622-.007,0a93.828,93.828,0,0,1-14.9,2.9C98.308,158.115,85.957,158.207,76.273,158.207ZM88.594,15.865A3.515,3.515,0,0,0,85.1,19.3L83.055,136.285a3.5,3.5,0,0,0,3.438,3.561h.062a3.516,3.516,0,0,0,3.5-3.439L92.1,19.426a3.5,3.5,0,0,0-3.438-3.56Zm22.04.134a3.5,3.5,0,0,0-3.493,3.317l-6.124,116.84a3.5,3.5,0,0,0,3.312,3.678c.062,0,.125,0,.187,0a3.5,3.5,0,0,0,3.491-3.317l6.124-116.84A3.505,3.505,0,0,0,110.82,16C110.758,16,110.7,16,110.634,16ZM45.3,15.738h-.063A3.5,3.5,0,0,0,41.8,19.3l2.042,116.982a3.516,3.516,0,0,0,3.5,3.439H47.4a3.505,3.505,0,0,0,3.439-3.56L48.8,19.176A3.516,3.516,0,0,0,45.3,15.738Zm-22.041.134c-.062,0-.124,0-.185,0a3.505,3.505,0,0,0-3.312,3.678L25.888,136.4a3.5,3.5,0,0,0,3.491,3.317c.062,0,.125,0,.187,0a3.5,3.5,0,0,0,3.312-3.678L26.754,19.189A3.5,3.5,0,0,0,23.262,15.872Zm43.313-.2a3.5,3.5,0,0,0-3.5,3.5v117a3.5,3.5,0,0,0,7,0v-117A3.5,3.5,0,0,0,66.575,15.668Z" transform="translate(329.679 263.708)" fill="#fff"/>
                                                                <path id="Exclusion_2" data-name="Exclusion 2" d="M129.752,21.354H0L8.576,9.111H47.034V5.176C47.034.249,50.867,0,51.635,0c.08,0,.126,0,.126,0H77.72a3.893,3.893,0,0,1,3.738,2.151A5.527,5.527,0,0,1,82.022,4.3V9.119h38.935l8.794,12.234v0h0ZM75.713,2.831a3.541,3.541,0,0,0-.4.021H53.134a2.557,2.557,0,0,0-1.956.718,2.636,2.636,0,0,0-.619,1.788V9.272H77.954V4.6C77.954,3,76.387,2.831,75.713,2.831Z" transform="translate(332.028 235.728)" fill="#fff"/>
                                                            </g>
                                                        </svg>

                                                        <span>
                                                            Usuń
                                                        </span>
                                                    </div>
                                                    <Link to={"/servicetasks/"+props.elData.id} className="buttons-list__item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.607 170.731">
                                                            <g id="Group_5" data-name="Group 5" transform="translate(-1013.739 -444.54)">
                                                                <path id="Path_7" data-name="Path 7" d="M1023.01,613.905s-4.142-3.977-1.326-18.227S1040.574,513,1040.574,513s.663-10.108,5.965-14.416,9.445-5.8,21.375-5.634,129.409,0,129.409,0V474.62s.638-9.839-10.511-10.153-97.076.116-97.076.116-11.719-14.75-14.518-17.364-5.281-2.561-9.057-2.561-42.107-.085-42.107-.085a7.714,7.714,0,0,0-6.828,3.124c-2.856,3.7-2.856,5.846-2.9,8.7s-.581,149.233-.581,149.233-.29,2.8,3.829,5.836S1023.01,613.905,1023.01,613.905Z" fill="#fff"/>
                                                                <path id="Path_8" data-name="Path 8" d="M1039.28,615.234h150.6s4.407.308,7.531-4.5,22.863-97.273,22.863-97.273.944-4.761-3.921-8.911-8.078-2.722-10.934-2.767-144.793,0-144.793,0-9.2-1.527-10.785,7.146S1028.8,602.3,1028.8,602.3a10.389,10.389,0,0,0,2.715,9.5C1035.661,615.876,1039.28,615.234,1039.28,615.234Z" fill="#fff"/>
                                                            </g>
                                                        </svg>
                                                        <span>
                                                            Zobacz zadania
                                                        </span>
                                                    </Link>
                                                    
                                                </div>

                                                
                                        </div>
                                        <div className="mainPart__row">
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="mainPart__column itemNavi">
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </ServicesContext.Consumer>

    

    </>
)}

export default SingleItem;