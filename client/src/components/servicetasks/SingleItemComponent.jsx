import axios from "axios";
import { useContext } from "react";
import { ServiceTaskContext } from "../../contexts/ServiceTasksContext";
import { TaskContext } from "../../contexts/TasksContext";



const SingleItem = (props) => {
    const {serviceTasksDispatch} = useContext(ServiceTaskContext);



    
    return(
        <>
            <ServiceTaskContext.Consumer>
                {
                    () => (
                        <div className={props.status === 2 ? "mainPart__item done" : "mainPart__item"}>
                            <div className="mainPart__a">
                                <div className="mainPart__columns">
                                    <div className="mainPart__column item-info">
                                        <div className="mainPart__rows">
                                            <div className="mainPart__row">
                                                <span className="mainPart__item-basic-info">
                                                    <strong className="mainPart__item-title--task">{props.title} {props.prior === 1 ? <span className="mainPart__item-title--important">(PILNE)</span> : null}</strong>
                                                </span>
                                                <br />
                                                <span className="mainPart__users">Jakub Lipiński | Mateusz Lipski</span>
                                                
                                                <div className="buttons-list">
                                         
                                                </div> 
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mainPart__column itemNavi">
                                        progres
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </ServiceTaskContext.Consumer>
        </>
    )
}

export default SingleItem