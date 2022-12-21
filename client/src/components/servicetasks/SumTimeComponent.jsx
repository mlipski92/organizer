import { useContext } from "react";

import { ServiceTaskContext } from "../../contexts/ServiceTasksContext";


const SumTimeComponent = (props) => {
    let allTasksTime = 0;

    const { allTasks } = props;
    allTasks.forEach(el => {
        allTasksTime = allTasksTime + parseInt(el.time);
    });



    return (
        <>
            <div className="mainPart__sumTime">
                <span>Łaczny czas niezafakturowanej pracy: <strong>{allTasksTime} minut</strong></span>
            </div>
        </>
    );
}

export default SumTimeComponent;