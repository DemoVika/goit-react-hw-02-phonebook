import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './filter.module.css';

export class Filter extends Component {
  handleFindContacts = event => {
    const { filter, value } = event.currentTarget;
    return this.setState({
      [filter]: value,
    });
  };

  getFilter = event => {
    let filter = event.currentTarget.value;
    this.props.updateFilter(filter);
  };

  render() {
    return (
      <label className={css.filter}>
        Find contacts by name <br />
        <input
          className={css.input}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.getFilter}
        />
      </label>
    );
  }
}

Filter.protoTypes = {
  updateFilter: PropTypes.func.isRequired,
};
