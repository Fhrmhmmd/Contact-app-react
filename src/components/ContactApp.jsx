import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';

function ContactApp() {
    const contacts = getData();
    
    return (
        <div className='contact-App'>
            <h1>Contact List</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactApp;