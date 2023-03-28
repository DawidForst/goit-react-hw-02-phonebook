import css from "../App.module.css";

function Filter({ value, onChange }) {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default Filter;
