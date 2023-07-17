import React, { useState, useRef } from 'react'
import { validateEmail } from "../../helpers/helpers";
import emailjs from 'emailjs-com';
import '../../App.css';
import '../../index.css'

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState();
    const senderName = useRef(null)
    const senderEmail = useRef(null)
    const senderMessage = useRef(null)
    
    
    
    
    const onClear = () => {
      
      senderName.current.value = ''
      senderEmail.current.value = ''
      senderMessage.current.value = ''
      
    }
    
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (!errorMessage) {
    //         setFormState({ [event.target.name]: e.target.value  });
    //         console.log('Form', formState);
    //     } 
    //     console.log('errorMessage', errorMessage);
    //   };

      const sendEmail = (e) => {
        e.preventDefault(); // Prevent the form from submitting normally

        emailjs.init('H3NJfFo9gZa01JpAU');

        emailjs.send('service_o8mik3w', 'template_ebqyw4p', {
          // Replace the placeholders with actual form data
          name: name,
          email: email,
          message: message,
          
        })
        .then(function(response) {
          console.log('Email sent!', response.status, response.text);
          alert('Your e-mail was successfully sent.')
          onClear()
          
        }, function(error) {
          console.error('Error sending email:', error);
        });

        

        
      }
    

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
          <h1 className='page-header'>Contact me</h1>
          <form className="contact-form" onSubmit={sendEmail} >

       
            <p className='contact-infoText'>PHONE: 434-547-7528</p>
            <p className='contact-infoText'>OR</p>
            <p className='contact-infoText'>MESSAGE me below:</p>
          
            
           <div className="field">
            <label  htmlFor="name">Name:</label>
            <input ref={senderName} type="text" name="name" defaultValue={name} onBlur={handleChange} />
           </div>
           <div className="field">
            <label htmlFor="address">Email address:</label>
            <input ref={senderEmail} type="email" name="email" defaultValue={email} onBlur={handleChange} />
           </div>
           <div className="field">
            <label htmlFor="message">Message:</label>
            <textarea ref={senderMessage} name="message" rows="5" defaultValue={message}  onBlur={handleChange} />
           </div>
           {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <div className="field">
            <button className='button' type="submit" >Submit</button>
            </div>
          </form>
        </section>
      );
}

    
    export default ContactForm;