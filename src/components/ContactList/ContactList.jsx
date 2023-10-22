import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
