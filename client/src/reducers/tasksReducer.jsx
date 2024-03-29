const tasksReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                tasksData: action.payload,
                error: ''
            }
        case 'DELETE_SUCCESS':
            return {
                loading: false,
                tasksData: state.tasksData.filter( el => el.id !== action.payload),
                error: ''
            }
        case 'ADD_SUCCESS':
            return {
                loading: false,
                tasksData: [...state.tasksData, action.payload],
                error: ''
            }
        case 'TICK_SUCCESS':
            return {
                loading: false,
                tasksData: state.tasksData.map( el => (
                    el.id === action.payload.itemData.id ? action.payload.itemData : el
                )),
                error: ''
            }
        case 'HOLD_SUCCESS':
            return {
                loading: false,
                tasksData: state.tasksData.map( el => (
                    el.id === action.payload.id ? action.payload : el
                )),
                error: ''
            }
        case 'RESUME_SUCCESS':
            return {
                loading: false,
                tasksData: state.tasksData.map( el => {
                    if (el.id === action.payload) {
                        el.whyholded = '';
                    }
                    return el;
                    
            }),
                error: ''
            }
        default:
            return state
    }
}

export default tasksReducer;

