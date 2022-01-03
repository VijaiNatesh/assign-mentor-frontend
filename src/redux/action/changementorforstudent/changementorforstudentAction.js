import axios from 'axios'
import { CREATE_CHANGEMENTORFORSTUDENT_REQUEST, CREATE_CHANGEMENTORFORSTUDENT_SUCCESS, CREATE_CHANGEMENTORFORSTUDENT_FAIL } from '../../action';


export const changeMentorforstudent = (changeData) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_CHANGEMENTORFORSTUDENT_REQUEST
            })
            const config = {
                headers: {                    
                    'Content-Type': 'application/json'                                                                                             
                }    
                           
            }

            const { data } = await axios.post("https://mentorstudentapi-vj.herokuapp.com/api/assign/editstudentmentor",
            (changeData),
                config)
            dispatch({
                type: CREATE_CHANGEMENTORFORSTUDENT_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CREATE_CHANGEMENTORFORSTUDENT_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}