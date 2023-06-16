import React from 'react';

class AddContact extends React.Component { //class component
    //cannot use a return(), instead use render().

    state = {
        name: "",
        email: ""
    };

    addForm = (event) => {
        event.preventDefault();
        if(this.state.name === '' && this.state.email) {
            alert("All the fields are mandatory!");
            return;
        }

        this.props.addContactHandlerVariable(this.state);
        console.log(this.state);
    }

    render() {
        return (
            <div className='ui main'>
                <br/>
                <h2>Add Your Contacts</h2>
                <form className='ui form' onSubmit={this.addForm}>
                    <div className='field'>
                        <label>Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Enter Name...'
                            value={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value}) } />
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input 
                            type='text' 
                            name='email' 
                            placeholder='Enter Email...'
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value}) } />
                    </div>

                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact;