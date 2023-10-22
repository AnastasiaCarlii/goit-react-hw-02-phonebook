import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <li className={css.listItem} key={id}>
      <span className={css.contactItem}>
        {name}:{number}
      </span>
    </li>
  );
};
