import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSubmit = (contact) => {
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleSubmit} />{" "}
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
