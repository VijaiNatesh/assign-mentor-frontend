import { CREATE_STUDENTSTOMENTOR_REQUEST, CREATE_STUDENTSTOMENTOR_SUCCESS, CREATE_STUDENTSTOMENTOR_FAIL } from "../../action";

export const studentstomentorReducer = (state ={}, action) =>{
    switch(action.type){
        case CREATE_STUDENTSTOMENTOR_REQUEST:
        return{
            loading: true
        }
        case CREATE_STUDENTSTOMENTOR_SUCCESS:
        return{
            studentstomentor: action.payload
        }
        case CREATE_STUDENTSTOMENTOR_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        default:
        return state;
    }
}