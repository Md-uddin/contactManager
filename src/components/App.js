import React, { useState,useEffect } from 'react';
import './App.css';
import Header from "./Header";
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Contactdetails from './Contactdetals';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
 

  const addContactHandler = (contact) => {
    console.log( "this is contact ",contact);

    setContacts([...contacts, { id: uuid(), ...contact }])
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }
  useEffect(() => {
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrivecontacts) setContacts(retrivecontacts)
  }, []);
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);
  
  return (
    <>
      <div className="ui container">
      <Header />
        <Router>
          <Switch>
       
            <Route path="/add" exact
              render={
                (props) => (
                  <AddContact
                  {...props}  addContactHandler={addContactHandler} />
                )}/>
          {/* <AddContact addContactHandler={addContactHandler} /> */}
            <Route path="/"b exact
              render={(props) => (
                <ContactList {...props}
                contacts={contacts} getContactId={removeContactHandler}
                />  )} />
            {/* <ContactList contacts={contacts}  getContactId ={removeContactHandler} /> */}
            <Route
              path="/contact/:id" component={Contactdetails}/>
        </Switch>
    </Router>
       
     </div>
    </>
  );
}

export default App;
