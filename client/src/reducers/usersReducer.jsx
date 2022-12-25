const usersReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                usersData: action.payload,
                error: ''
            }
        default:
            return state
    }
}

export default usersReducer;

