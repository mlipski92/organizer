import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import usersReducer from "../../reducers/usersReducer";
import MapUsersData from "./MapUsersData";

const initialUsersState = {
    loading: true,
    error: '',
    usersData: {}
}

const UsersListComponent = () => {
    const [users, usersDispatch] = useReducer(usersReducer, initialUsersState);

    useEffect(() => {
        axios.post('http://localhost:8800/users/all')
        .then(response => {
            usersDispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error => {
            usersDispatch({ type: 'FETCH_ERROR' })
        })
    },[])

    return (
        <>
            <div className="mainApp__part-inside">
                <div className="mainApp__part-header">
                    <h2 className="mainApp__part-h2">Użytkownicy</h2>
                </div>
                <div className="mainApp__part-body">
                    <div className="usersPart__list">

                        <MapUsersData data={users.usersData} />

                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersListComponent;