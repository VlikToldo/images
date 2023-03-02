import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './searchbar.module.css'

class Searchbar extends Component {
  state = {
    search: '',
  }

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {onSubmit} = this.props;
    onSubmit({...this.state});
    this.reset();
  }

  reset() {
    this.setState({
        search:'',
    })
  }

  render() {
    const {search} = this.state;
    const {handleChange, handleSubmit} = this;

    return (
      <header className={style.Searchbar} onSubmit={handleSubmit}>
        <form className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            value={search}
            onChange= {handleChange}
            name='search'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes ={
  onSubmit: PropTypes.func.isRequired
}