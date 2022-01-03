import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMentors, fetchMentorstudents } from '../../redux/action/mentor/mentorAction';
import styles from '../../myStyles.module.css'

function MentorList() {

    const [id, setId] = useState()
    


    const dispatch = useDispatch();
   

    useEffect(() => {       
        dispatch(fetchMentors())
    },[dispatch]) 

    useEffect(() => {
        dispatch(fetchMentorstudents())
    },[dispatch])
 

    const mentorList = useSelector(state => state.mentor)
    const { mentors } = mentorList
    console.log(mentors)   

    const { mentorstudents } = mentorList
    console.log(mentorstudents)
    const students = mentorstudents && mentorstudents.students
    console.log(students)


    const SubmitHandler = () => {      
       localStorage.setItem("mentorId", id)
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div className={styles.stumen}>
                    <label>Select Mentor</label>
                    <select onChange={(e) => setId(e.target.value)} >
                        <option>Select Mentor </option>
                        {mentors && mentors.map(mentor => {
                            return (
                                <option value={mentor && mentor._id} key={mentor._id}>
                                    {mentor.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <input type="submit" />
            </form>
            <div>
                <ul>
                {students && students.map((stud) => {
                    return(
                        <li key = {stud._id}>{stud.name}</li>
                    )                    
                })}
                </ul>
                </div>
        </div>
    )
}

export default MentorList
