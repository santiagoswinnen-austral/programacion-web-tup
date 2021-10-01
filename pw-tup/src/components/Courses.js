import SubjectCard from "./SubjectCard";
import {useState} from "react";

const Courses = () => {

  const [filtered, setFiltered] = useState(false)

  const subjects = [
    { name: 'Matemática', approved: 12} ,
    { name: 'Programación Web', approved: 12} ,
    { name: 'Algoritmos', approved: 8}
  ]

  const clickFunction = () => {
    setFiltered(!filtered)
  }

  const getName = () => {
    return filtered ? "Dejar de filtrar" : "Filtrar"
  }

  let finalSubjects;

  if (filtered) {
    finalSubjects = subjects.filter((subject) => {
      return subject.approved > 10
    })
  } else {
    finalSubjects = subjects
  }

  return (<div className='general'>
    <div className="navbar">
      <h4 className="navbar-element">Inicio</h4>
      <h4 className="navbar-element">Mi Perfil</h4>
      <h4 className="navbar-element">Mis Cursos</h4>
    </div>
    <div className="main-div">
      <h1 className="custom-title">Programación Web</h1>
      <p className="description">Curso de programación Web de un cautrimestre de duración</p>
    </div>
    <div className="main-div">
      <button className="btn btn-primary" onClick={clickFunction}>
        {getName()}
      </button>
    </div>
    <div className="all-cards">
      {
        finalSubjects
          .map((mapSubject) => {
            return (
              <SubjectCard subject={mapSubject}/>
            )
          })
      }
    </div>
  </div>)
}

export default Courses
