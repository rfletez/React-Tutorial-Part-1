import './App.css';
import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const contacts = [
    {
      id: "1",
      name: "Dave",
      email: 'dave@email.com'
    },
    {
      id: "2",
      name: "Mary",
      email: 'mary@email.com'
    },
    {
      id: "3",
      name: "Riley",
      email: 'riley@email.com'
    }
  ];

  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList/>
    </div>
  );
}

export default App;
