import React from "react";
import "./App.css"
import { useState } from "react";


const App = () => {
  let timer = new Date().toLocaleTimeString();
  

  const [clocktime, setClocktime] = useState(timer);

  const UpdateTime =()=>{
    timer = new Date().toLocaleTimeString();
    setClocktime(timer);
  };
  setInterval(UpdateTime,1000)
  return (
    <div className="App">
      <h1 className="time"> {clocktime}  </h1> 
      <h1 className="button">Digital Clock</h1>
    </div>
  );
};
export default App;

// export function App() {
//   let count = 1;
//   const increamentVal = () => {
//     count++;
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increamentVal}>click me</button>
//     </div>
//   );
// }
