//functional method
import react from 'react'

// function sayHello() {
//   return <h1> Hello from start component </h1>
// }



 const sayHello = (props) =>  {
            // props.name = "Ossama"
            //-------- Don't forgete TypeError: Cannot assign to read only property 'name' of object '#<Object>'
            //>>>> props is readOnly readonly
   return (
      <h4> {props.name} say Hello from start component <br /> from {props.country}
      <br/> {props.children} </h4> )

 }




export default sayHello


//___________________destruction method1
 /*
 const sayHello = (name,country,children) =>  {
   return (
      <h4> {name} say Hello from start component <br /> from {country}
      <br/> {children} </h4> )

 }
 */

/* method 2
 const sayHello = (props) =>  {
const {name,country,children} =props

  return (
     <h4> {name} say Hello from start component <br /> from {country}
     <br/> {children} </h4> )

}
*/
