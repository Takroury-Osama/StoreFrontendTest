import react , {useEffect,useState} from 'react'
import {Nav} from 'react-bootstrap'
import TshirtPage from './TshirtPage'
import axios from 'axios'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



const TshirtsPage = () => {
  let [Tshirts, setTshirts] = useState([])
  let [Error, setError] = useState('')

  let match = useRouteMatch();



  useEffect(() => {
    axios.get('http://localhost:4000/Tshirts')
    .then((res)=> {
      console.log(res);
      setTshirts(res.data)
    })
    .catch((err)=> {
      console.log(err);
      setError('couldnt get data')
    })
  },[]);

  return (
    <div>
    <Nav variant="tabs" defaultActiveKey="/home">

  {Tshirts.length? Tshirts.map(tshirt =>
    <Nav.Item key={tshirt._id}> <Nav.Link as={Link} to={'/tshirts/'+tshirt._id}>
    {tshirt.name} </Nav.Link> </Nav.Item>
  ): null
}
</Nav>

  <Switch>
    <Route path={match.url+ "/:ID"}><TshirtPage/></Route>
  </Switch>
</div>
  )
}

export default TshirtsPage
