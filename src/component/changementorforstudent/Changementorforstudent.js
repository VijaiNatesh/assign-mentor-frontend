import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchStudents } from "../../redux/action/student/studentAction.js"
import { fetchMentors } from '../../redux/action/mentor/mentorAction.js';
import styles from '../../myStyles.module.css'
import { changeMentorforstudent } from '../../redux/action/changementorforstudent/changementorforstudentAction.js';
import { createStudentstomentor } from '../../redux/action/studentstomentor/studentstomentorAction.js';


function Changementorforstudent() {

    const [studentSelected, setStudentSelected] = useState([])
    const [mentorSelected, setMentorSelected] = useState()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStudents())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchMentors())
    }, [dispatch])

    const studentsList = useSelector(state => state.student)
    const { students } = studentsList
    console.log(students)


    const mentorsList = useSelector(state => state.mentor)
    const { mentors } = mentorsList
    console.log(mentors)
    

    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(studentSelected, mentorSelected)
        const studData = students.filter((s) => {
            return s._id === studentSelected;
          });
          const isAssigned = studData[0].mentor;
          console.log(studData, "studData");
          console.log(isAssigned, "isAssigned");
        if(isAssigned){
            const changeData = {
                studentId: studentSelected,
                newMentorId: mentorSelected
            }
           await dispatch(changeMentorforstudent(changeData))
        }
        else{
            const assignData = {
                mentorId: mentorSelected,
                students: new Array (studentSelected)
            }
            await dispatch(createStudentstomentor(assignData))
        }
        
        
    }


    return (
        <div>
            <div className={styles.stumen}>
                <label>Select Mentor</label>
                <select onChange={(e) => setMentorSelected(e.target.value)}>
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

            <div className={styles.stumen}>
                <label>Select Students</label>
                {students && students.map(stu => {
                    return (
                        <li key={stu._id}>
                            <input
                                type="checkbox"
                                value={stu && stu._id}
                                onChange={(e) => setStudentSelected(e.target.value)}
                            />
                            {stu.name}
                        </li>
                    )
                })}
            </div>
            <div className={styles.stumen}>
                <button onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )
}

export default Changementorforstudent
