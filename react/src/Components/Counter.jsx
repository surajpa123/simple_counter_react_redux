import React, { useState } from 'react'
import style from "../Components/counter.css"
import {useSelector,useDispatch} from "react-redux"
import { store } from '../Redux/store';
import { inccount , deccount} from '../Redux/action';
export default function Counter() {
    const dispatch = useDispatch();
    var count1 = useSelector((store)=>
       store.count
    )
    const Inc = ()=>{
        dispatch(inccount(1))  
    }
    const Dec = ()=>{
        if(count1 == 0){
            document.getElementById("decb").style = "disbaled"
            return;
        }

        dispatch(deccount(1))
    }
  return (
      <>
    <div><h1>Count - {count1}</h1></div>
    <br />
    <div id='btng'>
    <button type="button" class="btn btn-success" onClick={Inc}>Inc</button>
  
    <button type="button" class="btn btn-secondary" id='decb' onClick={Dec}>Dec</button>
    </div>
    </>
  )
}
