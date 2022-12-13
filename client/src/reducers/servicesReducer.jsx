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
        case 'DELETE_SUCCESS':
            return {
                loading: false,
                servicesData: state.servicesData.filter( el => el.id !== action.payload),
                error: ''
            }
        default:
            return state
    }
}

export default servicesReducer;