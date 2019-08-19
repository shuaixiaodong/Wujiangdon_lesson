import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentMode from './concurrent/index';
import Index from './lifeCycle-react15/index';
// hooks function 组件增强
function App() {
  const [parentCount,setParentCount] = useState(0);
  return (
    <div>
      {/* <ConcurrentMode></ConcurrentMode> */}
      <button 
      onClick={ () => setParentCount( parentCount + 1)}
      >setParentCount</button>
      <Index parentCount={parentCount}></Index>
    </div>
  );
}
// var a ={};
// var b = Object.prototype
// console.log(a.prototype === b);
// console.log(a.__proto__ === b);
// console.log(Object.getPrototypeOf(a) === b);
export default App;
