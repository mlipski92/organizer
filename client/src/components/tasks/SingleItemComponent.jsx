import axios from "axios";
import { useContext } from "react";

import { TaskContext } from "../../contexts/TasksContext";
import TickTask from "./TickComponent";

const HoldButton = (props) => (
    <>
        <div onClick={ () => {props.askHoldedTaskHandler(props.data.filter(el => el.id === props.id)[0])}} className="buttons-list__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.088 175.638">
            <path id="Path_9" data-name="Path 9" d="M869.564,840.034c2.563-5.559,4.632-16.474,8.421-24.422s7.79-12.211,12.211-10.843.947,12.579,0,20.054-3.79,25.212-5.158,35.686-3.6,21.249-14.355,36.629-31.8,22.78-45.214,21.74-28.447-5.435-42.67-24.284-9.829-63.831-9.945-84.415,0-33.316,0-33.316a6.253,6.253,0,0,1,6.763-6.3c6.848,0,6.569,7.116,6.569,7.116V824.76s-.206,4.037,5.063,4.037,4.379-5.474,4.379-5.474V759.688s-.131-6.172,7.048-5.884,6.3,6.569,6.3,6.569v56.587a5.188,5.188,0,0,0,5.474,4.721c5.134,0,5.2-5.337,5.2-5.337v-67.4s-.563-5.611,6.706-5.611,6.842,5.611,6.842,5.611v68.014s-.333,4.721,5.106,4.721,5-4.226,5-4.226V759.688s-.822-5.184,6.474-5.184,6.9,5.184,6.9,5.184v80.346s-.758,2.652,2.526,4.363S867,845.593,869.564,840.034Z" transform="translate(-772.302 -743.335)" fill="#fff"/>
            </svg>

            <span>Wstrzymaj zadanie</span>
        </div>
    </>
)

const DeleteButton = (props) => (
    <>
        <div onClick={ () => {props.askDeleteTaskHandler(props.id)} } className="buttons-list__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.149 186.187">
            <g id="Group_1" data-name="Group 1" transform="translate(-329.68 -235.728)">
                <path id="Exclusion_1" data-name="Exclusion 1" d="M76.273,158.207c-17.028,0-37.988-.29-43.99-.53l-2.026-.078H30.23c-8.584-.325-14.787-.559-14.787-3.792,0-3.428-5.749-123.443-5.807-124.655H2.4c-.007,0-.073.008-.18.008A2.425,2.425,0,0,1,.9,28.789,2.274,2.274,0,0,1,0,26.754v-6.3a2.489,2.489,0,0,1,.56-1.717,2.378,2.378,0,0,1,1.837-.68H9.636L9.259,0H124.07l-.232,19.566h7.319a1.581,1.581,0,0,1,.168-.008,1.755,1.755,0,0,1,1.819,1.994v6.59a1.572,1.572,0,0,1-.354,1.129,2.08,2.08,0,0,1-1.633.578c-2.19,0-7.268-.69-7.319-.7l-6.775,125.622-.007,0a93.828,93.828,0,0,1-14.9,2.9C98.308,158.115,85.957,158.207,76.273,158.207ZM88.594,15.865A3.515,3.515,0,0,0,85.1,19.3L83.055,136.285a3.5,3.5,0,0,0,3.438,3.561h.062a3.516,3.516,0,0,0,3.5-3.439L92.1,19.426a3.5,3.5,0,0,0-3.438-3.56Zm22.04.134a3.5,3.5,0,0,0-3.493,3.317l-6.124,116.84a3.5,3.5,0,0,0,3.312,3.678c.062,0,.125,0,.187,0a3.5,3.5,0,0,0,3.491-3.317l6.124-116.84A3.505,3.505,0,0,0,110.82,16C110.758,16,110.7,16,110.634,16ZM45.3,15.738h-.063A3.5,3.5,0,0,0,41.8,19.3l2.042,116.982a3.516,3.516,0,0,0,3.5,3.439H47.4a3.505,3.505,0,0,0,3.439-3.56L48.8,19.176A3.516,3.516,0,0,0,45.3,15.738Zm-22.041.134c-.062,0-.124,0-.185,0a3.505,3.505,0,0,0-3.312,3.678L25.888,136.4a3.5,3.5,0,0,0,3.491,3.317c.062,0,.125,0,.187,0a3.5,3.5,0,0,0,3.312-3.678L26.754,19.189A3.5,3.5,0,0,0,23.262,15.872Zm43.313-.2a3.5,3.5,0,0,0-3.5,3.5v117a3.5,3.5,0,0,0,7,0v-117A3.5,3.5,0,0,0,66.575,15.668Z" transform="translate(329.679 263.708)" fill="#fff"/>
                <path id="Exclusion_2" data-name="Exclusion 2" d="M129.752,21.354H0L8.576,9.111H47.034V5.176C47.034.249,50.867,0,51.635,0c.08,0,.126,0,.126,0H77.72a3.893,3.893,0,0,1,3.738,2.151A5.527,5.527,0,0,1,82.022,4.3V9.119h38.935l8.794,12.234v0h0ZM75.713,2.831a3.541,3.541,0,0,0-.4.021H53.134a2.557,2.557,0,0,0-1.956.718,2.636,2.636,0,0,0-.619,1.788V9.272H77.954V4.6C77.954,3,76.387,2.831,75.713,2.831Z" transform="translate(332.028 235.728)" fill="#fff"/>
            </g>
            </svg>
            <span>Usuń</span>
        </div>
    </>
)

const ResumeTask = (props) => (
    <>
        <div onClick={props.resumeTaskHandler}className="buttons-list__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.808 189.855">
            <g id="Group_4" data-name="Group 4" transform="translate(-1024.42 -75.412)">
                <path id="Exclusion_3" data-name="Exclusion 3" d="M98.155,167.955H72.167l-4.708-22.747-13.331-5.687L37.2,152.857,15.66,132.826,29.333,114.7l-5.8-13.513L0,96.735V71.218l23.767-4.054L29.49,53.809,15.1,35.684l20.43-20.907L54.451,29.484l13.2-5.962L71.963,0H97.281l5.064,23.522L115.1,28.689l18.2-13.355,20.669,19.953L140.065,53.332l5.883,13.593,23.291,4.929V98.325L145.948,101.9l-5.406,12.321,14.2,18.983-21.392,19.841-18.6-13.848-12.3,5.167-4.294,23.588ZM85.6,47.087a36.89,36.89,0,1,0,36.891,36.89A36.932,36.932,0,0,0,85.6,47.087Z" transform="translate(1024.42 97.312)" fill="#fff"/>
                <path id="Exclusion_4" data-name="Exclusion 4" d="M48.311,82.823H35.52L33.2,71.606l-6.561-2.8-8.33,6.576L7.708,65.5l6.73-8.938L11.581,49.9,0,47.7V35.12l11.7-2,2.817-6.586L7.433,17.6,17.488,7.287,26.8,14.54l6.495-2.94L35.419,0H47.88l2.492,11.6,6.28,2.548,8.96-6.586L75.785,17.4l-6.847,8.9,2.9,6.7L83.3,35.433V48.487L71.833,50.251l-2.661,6.076,6.988,9.361L65.632,75.472l-9.155-6.829-6.052,2.548L48.311,82.823Zm-6.179-59.6A18.192,18.192,0,1,0,60.289,41.412,18.195,18.195,0,0,0,42.132,23.22Z" transform="matrix(0.921, 0.391, -0.391, 0.921, 1212.553, 75.412)" fill="#fff"/>
                <path id="Exclusion_5" data-name="Exclusion 5" d="M31.852,54.446H23.419l-1.528-7.374-4.326-1.843-5.492,4.323L5.082,43.058l4.437-5.876L7.636,32.8,0,31.359V23.087l7.713-1.314L9.57,17.443,4.9,11.568l6.63-6.777L17.67,9.558l4.282-1.933L23.353,0h8.216l1.643,7.625L37.352,9.3,43.26,4.971l6.707,6.468-4.514,5.85L47.361,21.7l7.558,1.6v8.581l-7.558,1.16-1.754,3.994,4.607,6.154-6.942,6.432-6.036-4.489L33.246,46.8l-1.394,7.646ZM27.779,15.264A11.959,11.959,0,1,0,39.75,27.223,11.978,11.978,0,0,0,27.779,15.264Z" transform="matrix(0.921, 0.391, -0.391, 0.921, 1214.933, 171.084)" fill="#fff"/>
            </g>
            </svg>
            <span>Wznów projekt</span>
        </div>
    </>
)

const Progress = (props) => {
    if( props.whyholded !== '') {
        return <div className="mainPart__progress--onHold itemNaviPart">Wstrzymano</div>;
    } else if (props.status === 2) {
        return <div className="mainPart__progress--done itemNaviPart">Zrobione</div>;
    } else if (props.status === 1) {
        return <div className="mainPart__progress--inProgress itemNaviPart">W toku</div>;
    }
}

const WhyHoldedInfo = (props) => (
    <>
        <div className="mainPart__why-holded">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 179.106 158.243">
                <g id="Group_6" data-name="Group 6" transform="translate(-466.725 -127.106)">
                    <path id="Exclusion_7" data-name="Exclusion 7" d="M163.646,158.243c-.426,0-.685-.009-.7-.009H10.985a20.821,20.821,0,0,1-2.96-.841A18.258,18.258,0,0,1,5.376,156.2a11.273,11.273,0,0,1-2.5-1.833A10.221,10.221,0,0,1,.213,149a11.876,11.876,0,0,1,.232-5.489C.937,141.921,22.167,104.9,39.89,74.125,59.23,40.54,78.428,7.377,78.62,7.046A14.534,14.534,0,0,1,80,4.793a13.508,13.508,0,0,1,1.68-1.9,9.345,9.345,0,0,1,2.305-1.6A14.375,14.375,0,0,1,89.969,0a11.89,11.89,0,0,1,4.22.729A9.272,9.272,0,0,1,97.9,3.269c1.634,1.847,5.44,7.94,11.312,18.11,5.416,9.38,10.411,18.464,10.621,18.846,2.881,5.241,56.877,98.528,57.422,99.47a13.648,13.648,0,0,1,.907,2.079,16.521,16.521,0,0,1,.947,5.178,10.582,10.582,0,0,1-1.834,5.906,10.8,10.8,0,0,1-4.734,4C169.535,158.107,165.319,158.243,163.646,158.243ZM89.435,9.263c-.05,0-.1,0-.152.006A2.293,2.293,0,0,0,87.7,10.291a4.3,4.3,0,0,0-.515.931L11.957,141.55a22.567,22.567,0,0,0-1.332,2.182c-.586,1.1-1.244,2.628-1.05,3.616a1.813,1.813,0,0,0,2.017,1.4,3.966,3.966,0,0,0,.836-.088l154.109-.125a2.1,2.1,0,0,0,.737.127,2.223,2.223,0,0,0,1.708-.816,2.379,2.379,0,0,0,.568-1.865,2.947,2.947,0,0,0-.255-.925L91.622,10.765C91.613,10.75,90.755,9.263,89.435,9.263Z" transform="translate(466.725 127.106)" fill="#fff"/>
                    <path id="Path_18" data-name="Path 18" d="M673.443,264.082s-2.652-6.992-.193-11.886,8.245-7.739,13.983-8,11.259,1.109,14.948,4.918,2.845,8.535,2.339,12.682-12.47,48.445-12.47,48.445-.776,2.113-2.422,2.245-3.6.274-4.3-2.052S673.443,264.082,673.443,264.082Z" transform="translate(-132.381 -75.413)" fill="#fff"/>
                    <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="11" cy="11.5" rx="11" ry="11.5" transform="translate(545 246.42)" fill="#fff"/>
                </g>
            </svg>
            <span>{props.whyholded}</span>
        </div>
    </>
)


const SingleItem = (props) => {
    const {deleteTask, setDeleteTask} = useContext(TaskContext);
    const {holdedTask, setHoldedTask} = useContext(TaskContext);
    const {tasksDispatch} = useContext(TaskContext);

    const askDeleteTaskHandler = (id) => {
        setDeleteTask(id);
    }

    const askHoldedTaskHandler = (id) => {
        setHoldedTask(id);
    }

    const resumeTaskHandler = () => {
        saveChangesHandler(props.id);
    }

    const saveChangesHandler = async (id) => {

            await axios.post("http://localhost:8800/tasks/hold/"+id, { whyHolded: '' })
            .then(response => {
                tasksDispatch({ type: 'RESUME_SUCCESS', payload: id });
            })
            .catch(error => {
                console.log(error);
            })
    }

    
    return(
        <>
            <TaskContext.Consumer>
                {
                    () => (
                        <div className={props.status === 2 ? "mainPart__item done" : "mainPart__item"}>
                            <div className="mainPart__a">
                                <div className="mainPart__columns">
                                    <div className="mainPart__column item-info">
                                        <div className="mainPart__rows">
                                            <div className="mainPart__row">
                                                <span className="mainPart__item-basic-info">
                                                    <strong className="mainPart__item-title--task">{props.elData.title} {props.elData.prior === 1 ? <span className="mainPart__item-title--important">(PILNE)</span> : null}</strong>
                                                </span>
                                                <br />
                                                <span className="mainPart__users">Jakub Lipiński | Mateusz Lipski</span>
                                                
                                                <div className="buttons-list">
                                                    { props.elData.status !== 2 ? <TickTask id={props.id} itemData={props.elData}  data={props.data} tasksDispatch={tasksDispatch} /> : null} 
                                                    { props.elData.whyholded !== '' ? <ResumeTask askHoldedTaskHandler={askHoldedTaskHandler} resumeTaskHandler={resumeTaskHandler} id={props.id} /> : null}
                                                    { props.elData.whyholded !== '' || props.elData.status === 2 ? null : <HoldButton askHoldedTaskHandler={askHoldedTaskHandler} data={props.data} id={props.id} />}
                                                    <DeleteButton askDeleteTaskHandler={askDeleteTaskHandler} id={props.id} />
                                                </div>

                                                {props.elData.whyholded !== '' ? <WhyHoldedInfo whyholded={props.elData.whyholded} /> : null} 
                                                
                                               
                                            
                                                
                                                
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mainPart__column itemNavi">
                                        <Progress whyholded={props.elData.whyholded} status={props.elData.status} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </TaskContext.Consumer>
        </>
    )
}

export default SingleItem