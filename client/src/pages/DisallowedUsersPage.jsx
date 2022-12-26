import axios from "axios";
import { useEffect, useReducer } from "react";
import disallowedUsersReducer from "../reducers/disallowedUsersReducer";

const initialDisallowedUsersState = {
    loading: true,
    error: '',
    disallowedUsersData: {}
}

const DisallowedUsersPage = () => {
    const [disallowedUsers, disallowedUsersDispatch] = useReducer(disallowedUsersReducer, initialDisallowedUsersState);
    

    useEffect(() => {
        axios.post('http://localhost:8800/projects/all')
        .then(response => {
            disallowedUsersDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            disallowedUsersDispatch({ type: 'FETCH_ERROR' })
        })
    },[])

    return (
        <>
            <p>test</p>
        </>
    )
}

export default DisallowedUsersPage;