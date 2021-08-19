import studentsList from '../data/students.json'
import Student from './Student';
import AddStudent from './AddStudent';
import React from 'react';



class Main extends React.Component {
    state = {
        studentsArr: studentsList
    }

    createStudent = (studentData) => {
        this.setState(prevState => {
            return { 
                studentsArr: [...prevState.studentsArr, studentData]
                
            }
        })
    }

    render() {
        return (
            <>
                <AddStudent addStudentHandler={this.createStudent} />
                <div className="student-list">
                    <h2>List of Students</h2>
                    {this.state.studentsArr.map(studentObj => {
                        return <Student {...studentObj} />;
                    })}
                </div>
            </>
        );
    }
    }
    

export default Main;