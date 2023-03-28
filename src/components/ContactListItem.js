import css from "../App.module.css";

function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
