const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '+1': {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case '-1': {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case '+100': {
            return {
                ...state,
                counter: state.counter + 100
            }
        }
        case '-100': {
            return {
                ...state,
                counter: state.counter - 100
            }
        }
        default:
            return state
    }
}

export default reducer;