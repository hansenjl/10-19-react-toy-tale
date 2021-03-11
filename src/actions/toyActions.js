const url = "http://localhost:3000/toys"

export const addToy = (toy) => ({ type: "ADDED_TOY", payload: toy });

export const setToys = (toys) => ({type: "GOT_TOYS", payload: toys})

// thunk gives us the ability to return FUNCTIONS with a default argument of dispatch
// async actions 
export const fetchToys = () => {
    console.log("B")
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(res => res.json())
        .then(json => {
            // instead of setState, we need to dispatch an action
            dispatch(setToys(json)) // dispatching an action to the reducer
            console.log("F")
        })
        console.log("C")
        // responsible for dispatching the setToys action
    }
}

export const createToy = (toy) => {
    // send a fetch request 
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(toy)
        }
        fetch(url, configObj)
        .then(res => res.json())
        .then(json => {
            dispatch(addToy(json))
           
        })
    }  
}

