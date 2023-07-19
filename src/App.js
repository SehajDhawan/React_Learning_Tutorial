import React from "react";
import {add,sub,mul,divi} from './Calculation'
function App(){
  return (
    <>
    <ul>
      <li>The sum of 2 no. is {add(20,2)}</li>
      <li>The sub of 2 no. is {sub(20,2)}</li>
      <li>The mul of 2 no. is {mul(20,2)}</li>
      <li>The div of 2 no. is {divi(20,3)}</li>
    </ul>
    </>
  );
}

export default App;