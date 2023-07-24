import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';

import React, {useState, useEffect} from 'react';
import LoginControl from './components/LoginControl';
import Blog from './components/Blog';
import Form from './components/Form';


function App() {
  const [flag, setFlag] = useState(true);

  const userInfo = {
    firstName: "John",
    lastName: "Doe"
  };

  const posts = [
    {
      id: 1,
      title: "Hello World",
      content: "Welcome to Programming"
    },
    {
      id: 2,
      title: "C Programming Language",
      content: "Basics of C"
    },
    {
      id: 3,
      title: "React Crash Course",
      content: "Learning ReactJS"
    }
  ];

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

      <div>
        <h2>Blog Component</h2>
        <Blog contentPosts={posts} />
      </div>

      <div>
        <h2>Form Component</h2>
        <Form />
      </div>
    </div>
  );
}

export default App;