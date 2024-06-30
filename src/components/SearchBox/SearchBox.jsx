import css from './SearchBox.module.css'

export default function SearchBox({ values, onChange }) {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={css.searchWrap}>
      <h2>Find contacts by name</h2>
      <input className={css.input}
        type="text"
        value={values}
        onChange={handleInputChange}
        name="search"
      />
    </div>
  );
}
