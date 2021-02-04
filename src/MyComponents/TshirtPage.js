import react, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const TshirtPage = () => {

  let [Tshirt, setTshirt] = useState()
  let {ID} = useParams();

  useEffect(() => {
    axios.get('http://localhost:4000/Tshirt/'+ ID)
    .then((res)=> {
      console.log(res);
      setTshirt(res.data[0])
    })
    .catch((err)=> {
      console.log(err);
    })
  },[ID]); //without Id here // first time true // then will not change

console.log(Tshirt);

  return (
    <div> {Tshirt? <img src={Tshirt.pic}/>: null} </div>
  )
}

export default TshirtPage
