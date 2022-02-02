import PropTypes from 'prop-types';
import s from './SeachBar.module.css';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.inputValue.value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        name="inputValue"
        type="text"
        placeholder="Search movie"
        autoFocus
        autoComplete="off"
      ></input>
      <button className={s.button} type="submit">
        Find
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
