import React from 'react'
import {createStore} from "redux"

const reduu = (state={x:0},action) =>{
if (action.type==="plus") 
    {
    return {x:state.x +1}
}
else if (action.type==="mins") 
    {
    return {x:state.x -1}
}
}


export let storehmo = createStore(reduu)


export const store = () => {
  return (
    <div>
        
    </div>
  )
}
