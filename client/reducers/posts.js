// a reducer takes in two things
// 1. the action (info about what happended)
// 2. copy of current state 

function posts(state=[], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index
            const newState = [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes+1},
                ...state.slice(i+1), //after the one we are updating
            ]
            return newState
        default:
            return state;
    }
}

export default posts;