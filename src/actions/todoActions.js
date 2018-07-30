import { FETCH_TODOS, FILTER_TODOS } from "./types";
import { getAllTodos } from "../services/TodoServices";

export const fetchTodos = (params) => async dispatch => {
    const allTodos = await getAllTodos(params);
    try {
        dispatch({
            type: FETCH_TODOS,
            payload: allTodos
        })
    } catch (err) {
        console.log(err);
    }

}

