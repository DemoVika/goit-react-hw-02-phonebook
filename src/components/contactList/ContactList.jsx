import PropTypes from 'prop-types';
import css from './contactList.module.css';

export const ContactList = props => {
  return (
    <ul className={css.list}>
      {props.contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(props.filterString.toLowerCase())
        )
        .map(item => {
          return (
            <li key={item.id}>
              {item.name} {item.number}{' '}
              <button
                className={css.button}
                type="button"
                onClick={() => props.handleDeleteItems(item.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  filter: PropTypes.string.isRequired,
  handleDeleteItems: PropTypes.func.isRequired,
};
