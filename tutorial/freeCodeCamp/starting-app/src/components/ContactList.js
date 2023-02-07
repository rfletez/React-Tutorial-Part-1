import React from 'react';

const ContactList = (props) => {
    console.log(props); 
    //To show the contacts (props) was accessed from App to this file.

    const renderContactList = props.contacts.map((contact) => {
        return(
            <div className='item'>
                <div className='content'>
                    <div className='header'> {contact.name} </div>
                    <div>{contact.email}</div>
                </div>
                <i className='trash alternate outline icon'></i>
            </div>
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