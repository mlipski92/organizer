import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ServicesContext } from '../../contexts/ServicesContext';

const SingleItem = (props) => {
    const { servicesDispatch } = useContext(ServicesContext);
    // console.log(JSON.stringify(props.elData));
 
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
                                        </div>
                                        <div className="mainPart__row">
                                            <div className="mainPart__progress--done">
                                                W toku
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainPart__column itemNavi">
                                    {/* <ArchiveProject projectsDispatch={projectsDispatch} archivingProject={archivingProject} name={props.name} setArchivingProject={setArchivingProject} id={props.id} /> */}
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