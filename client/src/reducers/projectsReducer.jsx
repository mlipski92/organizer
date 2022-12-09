const projectsReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                projectsData: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                projectsData: [],
                error: 'Something went wrong'
            }
        case 'DELETE_SUCCESS':
            return {
                loading: false,
                projectsData: state.projectsData.filter( el => el.id !== action.payload),
                error: ''
            }
        case 'EDIT_SUCCESS':
            return {
                loading: false,
                projectsData: state.projectsData.map( (el) => (
                    el.id === action.payload.id ? action.payload : el
                )),
                error: ''
            }
        case 'ARCHIVE_SUCCESS':
            return {
                loading: false,
                projectsData: state.projectsData.filter( el => el.id !== action.payload.id),
                error: ''
            }
        case 'RESUME_SUCCESS':
            return {
                loading: false,
                projectsData: state.projectsData.filter( el => el.id !== action.payload.id),
                error: ''
            }
        case 'ADD_SUCCESS':
            return {
                loading: false,
                projectsData: [...state.projectsData, action.payload],
                error: ''
            }
            // console.log(state.projectsData)
            default:
                return state
    }
}

export default projectsReducer;
