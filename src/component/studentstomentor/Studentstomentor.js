import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchStudents } from "../../redux/action/student/studentAction.js"
import { fetchMentors } from '../../redux/action/mentor/mentorAction.js';
import { createStudentstomentor } from '../../redux/action/studentstomentor/studentstomentorAction.js';
import styles from '../../myStyles.module.css'

function Studentstomentor() {
    const [studentsAssigned, setStudentsAssigned] = useState([])
    const [mentorAssigned, setMentorAssigned] = useState()

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
    const stu = students && students.filter(student => !student.mentor ? student : null)

    const mentorsList = useSelector(state => state.mentor)
    const { mentors } = mentorsList
    console.log(mentors)

    const checkboxHandler = (e) => {
        setStudentsAssigned((prev) => {
            if (e.target.checked === true) {
                if (!studentsAssigned.includes(e.target.value)) {
                    return [...prev, e.target.value];
                }
            }
        });
    }

    const submitHandler = () => {
        console.log(mentorAssigned, studentsAssigned)
        const assignData = {
            mentorId: mentorAssigned,
            students: studentsAssigned
        }
        dispatch(createStudentstomentor(assignData))
    }

    return (
        <div>
            <div className={styles.stumen}>
                <label>Select Mentor</label>
                <select onChange={(e) => setMentorAssigned(e.target.value)}>
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
                {stu && stu.map(stu => {
                    return (
                        <li key={stu._id}>
                            <input
                                type="checkbox"
                                value={stu && stu._id}
                                onChange={(e) => checkboxHandler(e)}
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

export default Studentstomentor
