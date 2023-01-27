const loggedReducer = (state = false, action) => {
    
    switch(action.type){

        case 'SIGNIN': 
            return true

        case 'LOGOUT':
            return false
            
        default:
            return state
    }
}

export default loggedReducer