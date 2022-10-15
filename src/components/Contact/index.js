import React, { useState } from 'react';
import { validateEmail } from "../../helpers/helpers";
import '../../App.css';
import '../../index.css'

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const [errorMessage, setErrorMessage] = useState();
    const { name, email, message } = formState;
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        } 
        console.log('errorMessage', errorMessage);
      };
    

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              } 
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
              if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
              }
          }; 

    // JSX
    return (
        <section>
          <h1 class='page-header'>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}  >
           <div className="field">
            <label  htmlFor="name">Name:</label>
            <input type="text"  name="name" defaultValue={name} onBlur={handleChange} />
           </div>
           <div className="field">
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
           </div>
           <div className="field">
            <label htmlFor="message">Message:</label>
            <textarea name="message"rows="5" defaultValue={message} onBlur={handleChange}  />
           </div>
           {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button class='button' type="submit">Submit</button>
          </form>
        </section>
      );
}

    
    export default ContactForm;