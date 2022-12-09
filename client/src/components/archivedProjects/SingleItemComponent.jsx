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
                                        <strong className="mainPart__item-title--project">{props.name}</strong>
                                        Jakub Lipiński | Mateusz Lipski
                                    </span>
                                <Link to={"/tasks/" + props.id}><p>Zobacz rekordy</p></Link>
                            </div>
                            <div className="mainPart__row">
                                <div className="mainPart__progress--done" data={props.data}>
                                    Zarchiwizowane
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainPart__column itemNavi">
                        <ResumeComponent projectsDispatch={props.projectsDispatch} id={props.id} name={props.name} setResumingProject={props.setResumingProject} />
                    </div>
                </div>
            </div>
        </div>
         
    </>
)}

export default SingleItem;