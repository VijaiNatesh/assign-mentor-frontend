import axios from 'axios'
import { CREATE_STUDENTSTOMENTOR_REQUEST, CREATE_STUDENTSTOMENTOR_SUCCESS, CREATE_STUDENTSTOMENTOR_FAIL } from '../../action';

//Create StudentstoMentor Assign
export const createStudentstomentor = (assignData) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_STUDENTSTOMENTOR_REQUEST
            })
            const config = {
                headers: {                    
                    'Content-Type': 'application/json'                                                                                             
                }    
                           
            }

            const { data } = await axios.post("https://mentorstudentapi-vj.herokuapp.com/api/assign/studenttomentor",
            (assignData),
                config)
            dispatch({
                type: CREATE_STUDENTSTOMENTOR_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CREATE_STUDENTSTOMENTOR_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}