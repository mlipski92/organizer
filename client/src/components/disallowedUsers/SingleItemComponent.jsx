import axios from "axios";
import { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";

const SingleItem = (props) => {

    const { disallowedUsersDispatch } = useContext(UsersContext);

    const allowUser = (id) => {
        axios.post('http://localhost:8800/users/allow-user/'+id)
        .then(response => {
            disallowedUsersDispatch({ type: 'ALLOW_SUCCESS', payload: response.data })
        })
        .catch(error => {
            disallowedUsersDispatch({ type: 'ALLOW_ERROR' })
        })
    }
 
    return(
    <>
        

        <UsersContext.Consumer>
            {
                () => (
                    <div className="disallowUsersList__row">
                        <span className="disallowUsersList__text">{props.elData.id}. <strong>{props.elData.name}</strong></span> <button className="disallowUsersList__button" onClick={() => {allowUser(props.elData.id)}}>Nadaj prawa</button>
                    </div> 
                )
            }
        </UsersContext.Consumer>
    </>
)}

export default SingleItem;