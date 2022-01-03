import { CREATE_MENTOR_REQUEST, CREATE_MENTOR_SUCCESS, CREATE_MENTOR_FAIL, FETCH_MENTORS_REQUEST, FETCH_MENTORS_SUCCESS, FETCH_MENTORS_FAIL, FETCH_MENTORSTUDENTS_REQUEST, FETCH_MENTORSTUDENTS_SUCCESS, FETCH_MENTORSTUDENTS_FAIL } from "../../action";


export const mentorReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_MENTOR_REQUEST:
        return{
            loading: true
        }
        case CREATE_MENTOR_SUCCESS:
        return{
            newMentor: action.payload
        }
        case CREATE_MENTOR_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        case FETCH_MENTORS_REQUEST:
        return{
            loading: true
        }
        case FETCH_MENTORS_SUCCESS:
        return{
            mentors: action.payload
        }
        case FETCH_MENTORS_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        case FETCH_MENTORSTUDENTS_REQUEST:
        return{
            loading: true
        }
        case FETCH_MENTORSTUDENTS_SUCCESS:
        return{
            mentorstudents: action.payload
        }
        case FETCH_MENTORSTUDENTS_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        default:
        return state
    }
}