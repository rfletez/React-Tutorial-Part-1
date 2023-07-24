import { useState } from "react";

function Form() {
    const initialValue = {
        name: "",
        email: "",
        password: ""
    };

    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents refresh of the page.
        
        alert(JSON.stringify(formData, undefined, 2));
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={formData.name} 
                onChange={(event) => setFormData({...formData, name: event.target.value}) }/> <br/>

            <label>Email: </label>
            <input type="email" value={formData.email} 
                onChange={(event) => setFormData({...formData, email: event.target.value}) }/> <br/>

            <label>Password: </label>
            <input type="password" value={formData.password} 
                onChange={(event) => setFormData({...formData, password: event.target.value}) }/> <br/>

            <button type="submit">Submit</button>

            <p>{JSON.stringify(formData)}</p>
        </form>
    );
}
export default Form;