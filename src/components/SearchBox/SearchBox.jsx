export default function SearchBox({ values, onChange }) {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={values}
        onChange={handleInputChange}
        name="search"
      />
    </div>
  );
}
