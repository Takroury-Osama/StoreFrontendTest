import react from 'react'

const ChildCom = (props) => {
  return (
    <div>
      <button onClick={props.SayHiToParent}> button from child {props.name}</button>

      <button onClick={props.SayHiToSomeone('osama11')}> button from child {props.name}</button>

    </div>
  )
}

export default ChildCom
