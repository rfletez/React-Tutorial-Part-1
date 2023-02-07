import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { uuid } from 'uuidv4'; 

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addingContactHandler = (contact) => {
    console.log(contact);

    setContacts([...contacts, { id: uuid(), ...contact }])
    //1st parameter is to set a REST operator of the vars from AddContact
    //2nd parameter is adding a unique id for each new contact.
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
      //This var will have a list of contacts not matching the id.
    });

    setContacts(newContactList);
  }

  //Storing values in the local storage after submission.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //This hook will retrieve contacts already stored and display it on the page,
  //even when the page is reloaded.
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
    if(retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={ addingContactHandler }/>
      <ContactList contacts={ contacts } getContactID={removeContactHandler}/>
    </div>
  );
}

export default App;
