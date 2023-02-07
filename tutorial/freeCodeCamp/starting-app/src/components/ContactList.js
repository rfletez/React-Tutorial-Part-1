import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props); 
    //To show the contacts (props) was accessed from App to this file.

    const deleteContactHandler = (id) => {
        props.getContactID(id);
    };

    const contacts = [{
        id: "1",
        name: 'Mike',
        email: 'mike@email.com'
    }];

    const renderContactList = contacts.map((contact) => {
        return(
            <ContactCard 
                propVariable={contact} 
                clickHandler={ deleteContactHandler } 
                key={contact.id}
            />
            //Passing props from parent to child component
        );
    });
    return (
        <div>
            <h2>
                Contact List
                <Link to='/add'>
                    <button className='ui button blue right'>Add Contact</button>
                </Link>
            </h2>
            <div className='ui celled list'>
                { renderContactList } 
                {/*Reference variable in JSX */}
            </div>
        </div>
    );
}

export default ContactList;