import { useEffect } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../contexts/ServicesContext";

const MessageComponent = () => {
    const { message, setMessage } = useContext(ServicesContext);
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