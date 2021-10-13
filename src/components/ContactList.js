import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    
  
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }
    const rendercontacts = props.contacts.map((contact) => {
        console.log(contact)
        return (
            
            <ContactCard contact={contact} clickHandler={deleteContactHandler} Key={contact.id}/>
        )
    }) 
    return ( 
      
        <div className= "ui celled list left">
            Contact list:-
           
            <Link to="/add">
            <button className="ui button blue right" id="btn">Add to contact</button></Link>
            {/* <a href="/add"> press to route</a> */}
            {rendercontacts}
          
        </div>
    )
  
}

export default ContactList;
