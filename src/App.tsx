import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import StudentCard from "./features/labs/Student"
import { Student } from "./models"

function App() {
  const john: Student = {
    name: "John",
    age: 3,
  }

  function handleStudentClick(student: Student) {
    console.log(student)
  }

  return (
    <div>
      <StudentCard student={john} onClick={handleStudentClick}></StudentCard>
    </div>
  )
}

export default App
