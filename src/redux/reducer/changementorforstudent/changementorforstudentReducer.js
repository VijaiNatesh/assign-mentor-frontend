import { CREATE_CHANGEMENTORFORSTUDENT_REQUEST, CREATE_CHANGEMENTORFORSTUDENT_SUCCESS, CREATE_CHANGEMENTORFORSTUDENT_FAIL } from "../../action";

export const changementorforstudentReducer = (state ={}, action) => {
    switch(action.type){
        case CREATE_CHANGEMENTORFORSTUDENT_REQUEST:
        return{
            loading: true
        }
        case CREATE_CHANGEMENTORFORSTUDENT_SUCCESS:
        return{
            mentortostudent: action.payload
        }
        case CREATE_CHANGEMENTORFORSTUDENT_FAIL:
        return{
            loading : false,
            error: action.payload            
        }
      default:
        return state
    }
}