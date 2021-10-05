
const CourseDetail = ({id, name, description, hours}) => {

  const displayHours = hours ? ('Número de horas :' + hours) : ('No hay horas especificadas para este curso')

  const url = '/api/courses/' + id

  return (
    <div>
      <h1>{name}</h1>
      <h4>{description}</h4>
      <p>{displayHours}</p>
    </div>
  )
}

export default CourseDetail
