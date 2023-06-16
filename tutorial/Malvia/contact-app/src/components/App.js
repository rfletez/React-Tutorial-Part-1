import React, {useState, useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(`From App Component: ${contact}`);
    setContacts([...contacts, contact]);
  }

  return (
    <div className='ui container'>
      Hello World!
      <Header/>
      <AddContact addContactHandlerVariable={addContactHandler}/>
      <ContactList contacts={ contacts } />
    </div>
  );
}

export default App;