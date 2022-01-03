import { CREATE_STUDENT_REQUEST, CREATE_STUDENT_FAIL, CREATE_STUDENT_SUCCESS, FETCH_STUDENTS_REQUEST, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_FAIL } from "../../action";


export const studentReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_STUDENT_REQUEST:
        return{
            loading: true
        }
        case CREATE_STUDENT_SUCCESS:
        return{
            newStudent: action.payload
        }
        case CREATE_STUDENT_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        case FETCH_STUDENTS_REQUEST:
        return{
            loading: true
        }
        case FETCH_STUDENTS_SUCCESS:
        return{
            students: action.payload
        }
        case FETCH_STUDENTS_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        default:
        return state;
    }
}