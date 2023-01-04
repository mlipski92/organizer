import axios from "axios";
import { useEffect, useReducer } from "react";
import MapData from "../components/disallowedUsers/MapDataComponent";
import { UsersContext } from "../contexts/UsersContext";
import disallowedUsersReducer from "../reducers/disallowedUsersReducer";

const initialDisallowedUsersState = {
    loading: true,
    error: '',
    disallowedUsersData: {}
}

const DisallowedUsersPage = () => {
    const [disallowedUsers, disallowedUsersDispatch] = useReducer(disallowedUsersReducer, initialDisallowedUsersState);
    

    useEffect(() => {
        axios.post('http://netcentrum.pl/api/users/disallowed-users')
        .then(response => {
            disallowedUsersDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            disallowedUsersDispatch({ type: 'FETCH_ERROR' })
        })
    },[])



    return (
        <>
            <UsersContext.Provider value={disallowedUsersDispatch}>
                <div className="disallowUsersList">
                    {JSON.stringify(disallowedUsers.disallowedUsersData) === "[]" ? <td><span className="emptyTable">Brak projektów na ten moment...</span></td> : null}   
                    {disallowedUsers.loading ? <span className="loadingText">Ładowanie...</span> : <MapData data={disallowedUsers.disallowedUsersData} />}
                </div> 
            </UsersContext.Provider>          
        </>
    )
}

export default DisallowedUsersPage;