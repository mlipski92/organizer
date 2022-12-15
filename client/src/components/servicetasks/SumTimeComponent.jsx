import { useContext } from "react";

import { ServiceTaskContext } from "../../contexts/ServiceTasksContext";


const SumTimeComponent = (props) => {
    let allTasksTime = 0;

    const { allTasks } = props;
    allTasks.forEach(el => {
        allTasksTime = allTasksTime + el.time;
    });



    return (
        <>
            <p>Łaczny czas niezafakturowanej pracy: <strong>{allTasksTime} minut</strong></p>
            
        </>
    );
}

export default SumTimeComponent;