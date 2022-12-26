const myTasksReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                myTasksData: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                myTasksData: [],
                error: 'Coś poszło nie tak'
            }
            default:
                return state
    }
}

export default myTasksReducer;
