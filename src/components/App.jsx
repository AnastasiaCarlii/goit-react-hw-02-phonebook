import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitData = data => {
    const currentContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (currentContact) {
      alert(`${currentContact.name} is already in your contacts`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />

        <h2>Contacts</h2>
        <SearchFilter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={this.filterContacts()} />
      </div>
    );
  }
}
export default App;
