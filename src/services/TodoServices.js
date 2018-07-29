import Axios from 'axios';
import { BASE_URL } from '../constants/TodoConstants';

export async function getAllTodos(){
    try{
        const response =  await Axios.get( `${BASE_URL}todos` );
        if(response){
            return response.data.data;
        }
    }catch(err){
        console.error(err);
    }
}