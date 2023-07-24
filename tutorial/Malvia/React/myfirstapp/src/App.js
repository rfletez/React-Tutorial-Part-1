import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';

import React, {useState, useEffect} from 'react';
import LoginControl from './components/LoginControl';


function App() {
  const [flag, setFlag] = useState(true);

  const userInfo = {
    firstName: "John",
    lastName: "Doe"
  };

  const toggle = () => {
    console.log('Toggle Clicked');
    setFlag(!flag);
  }

  return (
    <div>
      <div>Hello World!</div>
      <div> <Welcome user={userInfo} /> </div>
      {/* <div> <Welcome user="Tom"/> </div>
      <div> <Welcome user="Sarah"/> </div> */}

      <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
      <br/>
      {flag ? <Clock/> : "No Clock component"}

      <div>
        <h2>Login Control Component</h2>
        <LoginControl/>
      </div>
    </div>
  );
}

export default App;