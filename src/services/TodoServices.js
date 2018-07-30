import Axios from 'axios';
import { BASE_URL } from '../constants/TodoConstants';

export async function getAllTodos(props) {
  try {
    const response = await Axios.get(`${BASE_URL}todos`, {
      params: {
        title: props.query,
        page_size: props.pageSize,
      },
    });
    if (response) {
      return response.data.data;
    }
  } catch (err) {
    console.error(err);
  }
}
