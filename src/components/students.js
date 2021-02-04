import react from 'react'
import Student from './student'


const students = (props) => {
//  const students = ['Osama', 'Ali', 'Belal', 'Ahmed', 'hasan']

  const studentsDetails = [
                            {Id: 1, Name: "osama", Nationality: "Jordan"},
                            {Id: 2, Name: "ali", Nationality: "SA"},
                            {Id: 3, Name: "belal", Nationality: "USA"},
                            {Id: 4, Name: "ahmed", Nationality: "UK"},
                          ]
                                                                    //key for virtual DOM in react to compare with real page Dom
  //const studentsDetailList = studentsDetails.map(studentsDetails => <h2 key={studentsDetails.Id}> This is {studentsDetails.Name} from {studentsDetails.Nationality} </h2>)

      //const studentsList = students.map(student => <h2> {student} </h2>)
      const studentsDetailList = studentsDetails.map(studentsDetails => < student key={studentsDetails.Id} studentsDetails= {studentsDetails} />)

//  return ( <div>{/*studentsList*/} <br /> <br /> {studentsDetailList} </div>)

//=======
return <div> {studentsDetailList} </div>
}

export default students

{

  /* You can make it inside the return or out

     <div>
    {
        students.map(student => <h2> {student} </h2>)
    }
      </div>*/
}
