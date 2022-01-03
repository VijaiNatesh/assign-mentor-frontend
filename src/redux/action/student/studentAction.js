import axios from "axios"
import { CREATE_STUDENT_REQUEST, CREATE_STUDENT_SUCCESS, CREATE_STUDENT_FAIL, FETCH_STUDENTS_REQUEST, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_FAIL } from "../../action";

//Create Student
export const createStudent = (studentData) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_STUDENT_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://mentorstudentapi-vj.herokuapp.com/api/student",
                (studentData),
                config)
            dispatch({
                type: CREATE_STUDENT_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CREATE_STUDENT_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}

// Reading students list
export const fetchStudents = () => {
    return async dispatch => {
        try {
            dispatch({
                type: FETCH_STUDENTS_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.get("https://mentorstudentapi-vj.herokuapp.com/api/student/list",   
                config)
            dispatch({
                type: FETCH_STUDENTS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: FETCH_STUDENTS_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}