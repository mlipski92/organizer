const disallowedUsersReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                disallowedUsersData: action.payload,
                error: ''
            }
        case 'ALLOW_SUCCESS':
            return {
                loading: false,
                disallowedUsersData: state.disallowedUsersData.filter( el => el.id !== action.payload),
                error: ''
            }
        default:
            return state
    }
}

export default disallowedUsersReducer;

