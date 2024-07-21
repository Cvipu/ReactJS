import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import countReducer from './Context/redux/CountReducer';

function Child() {
    let count = useSelector((store)=> store.countReducer);
    let dispatch = useDispatch();
    console.log(count);
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={()=>dispatch({type: 'inc'})}>INC</button>
        <button onClick={()=>dispatch({type: 'dec'})}>DEC</button>
      </div>
    </>
  )
}

export default Child
