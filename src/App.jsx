import { useState } from 'react'
import './App.css'
import Chai from './pages/counter'
function App() {
  
let [counter,setCounter] = useState(15)



// let counter =15
const addValue = () => {
//  console.log("clicked",counter);
 counter = counter + 1
 setCounter(counter)

}


let removeValue = () => {
  setCounter(counter -1)
}
  return (
 
 < >
    <h1>chai aur react</h1>
    <h1>Counter value </h1>
    <h1>{counter}</h1>
    <button  onClick={addValue}>Add value{counter}</button>
<br></br><br></br>

     <button onClick={removeValue}>remove value</button>
 </> )
}

export default App
