import react from 'react'

const student = ({studentDetail}) => { //use {studentDetail} and remove props

  return (<h2 key={studentDetail.Id}> This is {studentDetail.Name} from {studentDetail.Nationality} </h2>)
}

export default student
