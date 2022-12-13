const servicesReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                servicesData: action.payload,
                error: ''
            }
        case 'ADD_SUCCESS':
            return {
                loading: false,
                servicesData: [...state.servicesData, action.payload],
                error: ''
            }
        default:
            return state
    }
}

export default servicesReducer;