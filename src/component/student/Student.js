import React,{useState} from 'react'
import styles from '../../myStyles.module.css'
import {useDispatch} from "react-redux"
import {createStudent} from "../../redux/action/student/studentAction"
function Student() {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const dispatch = useDispatch()

    const formSubmitHandler = (e) => {
        e.preventDefault();
       const studentData = {name, email}
        dispatch(createStudent(studentData))
        setName("")
        setEmail("")
    }

    return (
        <div>
            <form className={styles.mentorForm} onSubmit = {formSubmitHandler}  >
                <div className={styles.mentorForm}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                </div>
                <div className={styles.mentorForm}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Student
