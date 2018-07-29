import { FETCH_TODOS, FILTER_TODOS } from "./types";
import { getAllTodos } from "../services/TodoServices";

export const fetchTodos = () => async dispatch => {
    const allTodos = await getAllTodos();
    console.log(allTodos);
    try {
        dispatch({
            type: FETCH_TODOS,
            payload: allTodos
        })
    } catch (err) {
        console.log(err);
    }

}

// export const filterTodos =() => async dispatch =>{
//     const filteredTodos = await getFilteredTodos(queries);

//     try{
//         dispatch({
//             type : FILTER_TODOS,

//         })
//     }
// }