import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props); 
    //To show the contacts (props) was accessed from App to this file.

    const deleteContactHandler = (id) => {
        props.getContactID(id);
    };

    const renderContactList = props.contacts.map((contact) => {
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
        <div className='ui celled list'>
            { renderContactList } 
            {/*Reference variable in JSX */}
        </div>
    );
}

export default ContactList;