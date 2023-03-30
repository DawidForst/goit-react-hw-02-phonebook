import ContactListItem from '../../components/ContactListItem/ContactListItem';
import PropTypes from "prop-types";


function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} onDelete={() => onDelete(id)} />
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {

  onDelete: PropTypes.string,
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
}