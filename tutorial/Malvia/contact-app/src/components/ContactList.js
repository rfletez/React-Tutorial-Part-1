import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(`Passing from Parent to Child: ${props}`);

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} key={contact.id} />
        );
    })

    return (
        <div className='ui celled list'>{renderContactList}</div>
    );
}
export default ContactList;