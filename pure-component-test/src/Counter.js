import React from 'react';
import RegularComponent from './RegularComponent';
// import styled from 'styled-components'
function Counter({name}) {
    const [count,setCount] = React.useState(0);

console.log("child component counter")
  return <div>
      <h1>Props: {name.name}</h1>
      {count}
      <RegularComponent name ={name} />
      <button onClick={()=>setCount(count+1)}>Click</button>
  </div>;
}

/**
 * Deep compare the current props value with the previous props value. if they are equal, don't rerender else rerender
 * @param {*} prevProps  
 * @param {*} currProps 
 * @returns Boolean
 */
function areEqual(prevProps , currProps){
  console.log(prevProps.name.name === currProps.name.name)
   return prevProps.name.name === currProps.name.name

  return false;
}


export default React.memo(Counter);
