import { Link } from 'react-router-dom';
import { useContext } from 'react';

import ResumeComponent from './ResumeComponent';

const SingleItem = (props) => {
 
    return(
    <>
        
        <div className="mainPart__item">
            <div className="mainPart__a">
                <div className="mainPart__columns">
                    <div className="mainPart__column item-info">
                        <div className="mainPart__rows">
                            <div className="mainPart__row">
                                    <span className="mainPart__item-basic-info">
                                        <strong className="mainPart__item-title--project">{props.elData.name}</strong>
                                    </span>
                                <div className="buttons-list">
                                    <Link to={"/tasks/" + props.id} className="buttons-list__item">
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
                                <div className="mainPart__progress--done">
                                    Zarchiwizowane
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainPart__column itemNavi">
                        <ResumeComponent projectsDispatch={props.projectsDispatch} id={props.id} name={props.elData.name} setResumingProject={props.setResumingProject} />
                    </div>
                </div>
            </div>
        </div>
         
    </>
)}

export default SingleItem;