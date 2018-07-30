import { FETCH_TODOS } from "../actions/types";

const initialState = {
    allTodos:[],        //arrays of todos
    singleTodo : {},    //single todo
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
        return {
            ...state,
            allTodos: action.payload
        };
        default:
            return state;
    }
}
