import pgimg from "../images/programacion.jpeg";


function SubjectCard ({subject}) {



  return (
    <div className="card-container-custom">
      <div className="card">
        <img src={pgimg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{subject.name}</h5>
          <p className="card-text">
            En este curso se verán diversos temas vinculados con la programación web, como por ejemplo JavaScript,
            CSS, React, Django y algunos otros conceptos avanzados.
          </p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
  )
}
export default SubjectCard
