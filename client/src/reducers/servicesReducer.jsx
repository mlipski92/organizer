const servicesReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                servicesData: action.payload,
                error: ''
            }
            // console.log("dad"+ JSON.stringify(action.payload)
        default:
            return state
    }
}

export default servicesReducer;