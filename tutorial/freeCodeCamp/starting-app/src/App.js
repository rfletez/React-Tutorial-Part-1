import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const [contacts, setContacts] = useState([]);

  const addingContactHandler = (contact) => {
    console.log(contact);

    setContacts([...contacts, contact])
    //2nd parameter is to add the new contacts.
  }

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={ addingContactHandler }/>
      <ContactList contacts={ contacts }/>
    </div>
  );
}

export default App;
