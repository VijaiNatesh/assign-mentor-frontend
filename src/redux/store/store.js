import {createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { mentorReducer } from "../reducer/mentor/mentorReducer";
import { studentReducer } from "../reducer/student/studentReducer";
import { studentstomentorReducer } from "../reducer/studentstomentor/studentstomentorReducer";
import { changementorforstudentReducer } from "../reducer/changementorforstudent/changementorforstudentReducer";

const middleware = [thunk]



const reducer = combineReducers({
    mentor: mentorReducer,
    student: studentReducer,
    studentstomentorAssign: studentstomentorReducer,
    changementorforstudent: changementorforstudentReducer
})

const store = createStore(
    reducer,   
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store