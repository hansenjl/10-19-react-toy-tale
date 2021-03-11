const toyReducer = (state = { toys: [], loading: false }, action) => {
    switch(action.type){
        case "GOT_TOYS":
            console.log("E")
            return {...state, toys: action.payload, loading: false}
        case "ADDED_TOY":
            return { ...state, toys: [...state.toys, action.payload] }
        case "LOADING":
            return  {...state, loading: true }
        default: 
            return state
    }
}

export default toyReducer