import axios from "axios"
import { CREATE_MENTOR_REQUEST, CREATE_MENTOR_SUCCESS, CREATE_MENTOR_FAIL, FETCH_MENTORS_REQUEST, FETCH_MENTORS_SUCCESS, FETCH_MENTORS_FAIL, FETCH_MENTORSTUDENTS_REQUEST, FETCH_MENTORSTUDENTS_SUCCESS, FETCH_MENTORSTUDENTS_FAIL } from "../../action";


//Create Mentor
export const createMentor = (mentorData) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_MENTOR_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://mentorstudentapi-vj.herokuapp.com/api/mentor",
                (mentorData),
                config)
            dispatch({
                type: CREATE_MENTOR_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CREATE_MENTOR_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}

// Reading mentors list
export const fetchMentors = () => {
    return async dispatch => {

        try {
            dispatch({
                type: FETCH_MENTORS_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.get("https://mentorstudentapi-vj.herokuapp.com/api/mentor/list",
                config)
            dispatch({
                type: FETCH_MENTORS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: FETCH_MENTORS_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}

// Reading mentor's students
export const fetchMentorstudents = () => {

    return async dispatch => {
        
        const id = localStorage.getItem("mentorId")
        localStorage.clear()
        try {
            dispatch({
                type: FETCH_MENTORSTUDENTS_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.get(`https://mentorstudentapi-vj.herokuapp.com/api/mentor/student/${id}`,
                config)
            dispatch({
                type: FETCH_MENTORSTUDENTS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: FETCH_MENTORSTUDENTS_FAIL,
                payload: error.response && error.response.data.message
            })
        }

    }
}