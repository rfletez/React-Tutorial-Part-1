import React, {useState, useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

import "./App.css";
import { uuid } from 'uuidv4';

function App() {

  const LOCAL_STORAGE_KEY = "contacts"; 

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(`From App Component: ${contact}`);
    setContacts([...contacts, {id: uuid(), ...contact} ]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    //When inspecting, check on 'Application' tab next to Console to see the stored items
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      Hello World!
      <Header/>
      <AddContact addContactHandlerVariable={addContactHandler}/>
      <ContactList contacts={ contacts } getContactId={removeContactHandler} />
    </div>
  );
}

export default App;