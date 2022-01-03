import React from 'react'
import {Nav, Container, Navbar} from 'react-bootstrap'
import styles from "../myStyles.module.css"

function Navigation() {
    return (
        <div>
           <Navbar bg="primary" variant="dark" >
                <Container>
                  
                    <Nav className={styles.navbar} >
                        
                        <Nav.Link href="/mentor" className={styles.navbar} >AddMentor</Nav.Link><br/>
                        <Nav.Link href="/student" className={styles.navbar}>AddStudent</Nav.Link><br/>
                        <Nav.Link href="/studentstomentor" className={styles.navbar}>AddStudent >> Mentor</Nav.Link><br/>
                        <Nav.Link href="/changementortostudent" className={styles.navbar}>Change Mentor >> Student</Nav.Link><br/>
                        <Nav.Link href="/mentorlist" className={styles.navbar}>Mentor List</Nav.Link><br/>                                                                   
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation