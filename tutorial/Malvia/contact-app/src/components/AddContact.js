import React from 'react';

class AddContact extends React.Component {
    //cannot use a return(), instead use render().
    render() {
        return (
            <div className='ui main'>
                <h2>Add Your Contacts</h2>
                <form className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Enter Name...' />
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Enter Email...' />
                    </div>

                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact;