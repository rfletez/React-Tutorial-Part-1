import React from 'react';

export default class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };

    add = (event) => {
        event.preventDefault();

        if(this.state.name === "" || this.state.email === "") {
            alert("Enter value to all the fields");
            return;
        }

        this.props.addContactHandler(this.state);

        this.setState({ name:'', email:'' });
        //Clear the input fields after submission.

        this.props.history.push("/");
        //After persisting the data to local storage, 
        //We travel back to the home page to see the new list.

       //console.log(this.state);
    }

    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name: </label>
                        <input type='text' 
                            name='name' 
                            placeholder='Name...' 
                            value={this.state.name}
                            onChange={(event) => this.setState({ name: event.target.value }) } 
                        />
                    </div>

                    <div className='field'>
                        <label>Email: </label>
                        <input type='text' 
                            name='email' 
                            placeholder='Email...'
                            value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value }) }
                        />
                    </div>

                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}