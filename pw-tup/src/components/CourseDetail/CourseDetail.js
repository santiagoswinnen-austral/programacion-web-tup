import  {useParams} from 'react-router-dom'

const CourseDetail = ({name, description, hours}) => {

  const displayHours = hours ? ('Número de horas :' + hours) : ('No hay horas especificadas para este curso')

  let { id } = useParams();

  return (
    <div>
      <h1>{name}</h1>
      <h2>Hola! El id de este curso es {id}</h2>
      <h4>{description}</h4>
      <p>{displayHours}</p>
    </div>
  )
}

export default CourseDetail
