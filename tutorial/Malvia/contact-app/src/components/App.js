import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
      id: 1,
      name: "ross",
      email: "ross@email.com"
    },
    {
      id: 2,
      name: "mike",
      email: "mike@email.com"
    }
  ];

  return (
    <div className='ui container'>
      Hello World!
      <Header/>
      <AddContact/>
      <ContactList contacts={ contacts } />
    </div>
  );
}

export default App;