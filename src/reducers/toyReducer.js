const toyReducer = (state = { toys: [], loading: true }, action) => {
    switch(action.type){
        case "GOT_TOYS":
            return state 
        case "ADDED_TOY":
            return { ...state, toys: [...state.toys, action.payload] }
        default: 
            return state
    }
}

export default toyReducer