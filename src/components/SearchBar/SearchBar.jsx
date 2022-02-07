import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './SeachBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [state, setState] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        name="inputValue"
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
        placeholder="Search movie"
        autoFocus
        autoComplete="off"
      />
      <button className={s.button} type="submit">
        Find
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
