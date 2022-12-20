import { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const MessageComponent = () => {
    const { message, setMessage } = useContext(TaskContext);
    const classNames = "messages " + (message !== null ? message.type : null);

    useEffect(() => {
          setTimeout(()=>{
            setMessage(null);
           }, 6000)
    })


    return (
        <>
            <div className={classNames}>{ message !== null ? message.msg : null}</div>
        </>
    )
}

export default MessageComponent;