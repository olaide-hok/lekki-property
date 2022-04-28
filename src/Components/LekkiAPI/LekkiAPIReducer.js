const lekkiApiReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PROPERTIES':
            return {
                ...state,
                loading: false,
                properties: action.payload.properties
            }
        case 'SET_LOADING':
            return {
                loading: true,
                properties: [],
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                properties: []
            }
        default:
            return state;
    }
}

export default lekkiApiReducer