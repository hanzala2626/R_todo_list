
import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputList,setInputList] = useState('');
  const [item,setItem] = useState([]);

  const itemEvent = (event) =>{
setInputList(event.target.value);
}
 

const listOfItems = () => {
  setItem((oldItems) =>{
    console.log(oldItems);
    return[...oldItems,inputList]
  })
}
  

   return ( 

    <div className="main-div">
    <div className="center-div">
    
      <h1>To Do List</h1><br/><br/>
     
      <input className='input-box' type='text' placeholder='add Items' onChange={itemEvent}></input>
      <button onClick={listOfItems}> + </button><br/><br/>
      <ol>
       
          {inputList}
          {item.map((itemValue) => {
            return <li>{itemValue}</li>
          })}

         
      
      </ol>
      </div>

      
    </div>
    

   
  );
}



export default App;

