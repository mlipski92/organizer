import axios from "axios";
import { useRef, useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectsContext";



export const AddProject = () => {
    const { setAddingProject } = useContext(ProjectContext);

    const addProjectHandler = () => {
        setAddingProject(
            {
                id: null,
                name: '',
                status: 1
            }
        );
    }


    return (
        <>
            <ProjectContext.Consumer>
                {
                    () => (
                        <div className="sectionHeader">
                            <div className="sectionHeader__col--left">
                                <h1 className="sectionHeader__title">Wszystkie projekty</h1>
                            </div>
                            <div className="sectionHeader__col--right">
                                <strong onClick={addProjectHandler} className="mainPart__navi-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 187.091 187.882">
                                        <g id="Group_3" data-name="Group 3" transform="translate(-248.742 -767.664)">
                                            <path id="Exclusion_6" data-name="Exclusion 6" d="M42.594,85.188A42.605,42.605,0,0,1,26.014,3.347,42.605,42.605,0,0,1,59.174,81.841,42.328,42.328,0,0,1,42.594,85.188ZM20.554,35.025V49.26H35.509V63.328H49.245V49.26H63.479V35.025H49.245V20.68H35.509V35.025Z" transform="translate(350.644 870.358)" fill="#fff"/>
                                            <path id="Path_13" data-name="Path 13" d="M349.074,949.776H275.041s-10.89-1.718-18.666-9.782a27.807,27.807,0,0,1-7.632-18.073V791.645a23.915,23.915,0,0,1,9.937-17.547c9.793-7.2,18.793-6.408,18.793-6.408h52.75s14.509,7.95,30.7,24.986S384.138,818.7,384.138,818.7s1.685,2.715,1.591,8.8,0,29.111,0,29.111l-15.013,3.9V831.2s.368-5.4-7.416-5.4H332.039a5.757,5.757,0,0,1-4.763-6.1v-31.28s.1-5.965-4.622-5.965H274.99s-4.154-.585-8.253,4.344-3.656,8.253-3.656,8.253V922.426a13.126,13.126,0,0,0,3.661,7.344c3.168,2.952,8.568,4.176,8.568,4.176H341Z" transform="translate(0)" fill="#fff"/>
                                        </g>
                                    </svg>
                                </strong>
                            </div>
                        </div>
                    )
                }
            </ProjectContext.Consumer>
            
        </>
    )
}

export const AddProjectModal = (props) => {
    const name = useRef(true);

    const { addingProject, setAddingProject, projectsDispatch } = useContext(ProjectContext);
    const { setMessage } = useContext(ProjectContext);

    const inputChangeHandler = e => {
        const { inputType } = e.nativeEvent;
        if(inputType === 'deleteContentBackward') {
            setAddingProject({
                ...addingProject, [name.current.name]: e.target.value
        }); 
        } else if(inputType === 'insertText') {
            const singleChar = e.nativeEvent.data.toUpperCase();
            const allowedChars = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890 ÓŁŚĆŹŻ";
    
            if (allowedChars.includes(singleChar) && addingProject.name.length < 100) {
                setAddingProject({
                    ...addingProject, [name.current.name]: e.target.value
            });
            }
        }
    }

    const saveProjectHandler = async e => {
        const { name } = e.target;

        if (name === "cancelSave") {
            setAddingProject(null);
        } else if (name === 'confirmSave') {

            if (addingProject.name !== null && addingProject.name !== '') {
                await axios.post('http://netcentrum.pl/api/projects/add', {name: addingProject.name})
                .then( response => {
                    setMessage({msg: "Projekt został dodany!", type: "SUCCESS"});

                    axios.post('http://netcentrum.pl/api/projects/last')
                    .then(responseLast => {
                        const { name, id } = responseLast.data[0];
                            if(addingProject.name === name) {
                                projectsDispatch({ type: 'ADD_SUCCESS', payload: {...addingProject, id:id} });
                            } else {
                                console.log('error przy dodawaniu');
                            }   
                            setAddingProject(null);     
                    })
                    .catch(error => {
                        projectsDispatch({ type: 'FETCH_ERROR' })
                    })
                    setAddingProject(null);
                })
                .catch(error => {
                    console.log(error);
                })
            } else {
                setMessage({msg: "Nie wypełniłeś poprawnie wszystkich pól!", type: "FAIL"});
            }

        }
    }


    return (
        <>
            <ProjectContext.Consumer>
                {
                    () => (
                        <div className="addModal">
                            <div className="addModal__popup">
                                <div className="addModal__header">
                                    <h2 className="addModal__h2">Dodaj projekt</h2>
                                </div>
                                <div className="addModal__body">
                                    <div className="addModal__body-inside">
                                        <div className="addModal__form-list">
                                            <div className="addModal__form-item">
                                                <input  
                                                    ref={name}
                                                    name="name" 
                                                    onChange={inputChangeHandler} 
                                                    value={addingProject.name} 
                                                    type="text" 
                                                    className="addModal__input" 
                                                    placeholder="Nazwa projektu"
                                                />
                                                </div>
                                            <div className="addModal__form-item">
                                                <div className="addModal__buttons">
                                                    <button className="addModal__button" name="confirmSave" onClick={saveProjectHandler}>Zapisz</button>
                                                    <button className="addModal__button" name="cancelSave" onClick={saveProjectHandler}>Anuluj</button>
                                                
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                        </div>
                    )
                }
            </ProjectContext.Consumer>

        </>
    )
}