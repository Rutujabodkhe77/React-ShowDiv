import React,{useState}from 'react'
import './style.css';

function App() {
  const[my_condition,ChangeMyCondition] =useState(false)
  let MyDiv='';
  const showMyDiv =() =>
  {
    ChangeMyCondition(true);
  }
 
  if(my_condition)
  {
    MyDiv =(
 <div className="MyDiv">
        <h1> Current status:{my_condition}</h1>
      </div>
    );
  }
  else
  {
  
  }
  return (
    <div>
      <button className="myButton"onClick={showMyDiv}> Click Here To Show </button>
      {MyDiv}
    </div>
  
  );
}

export default App;
