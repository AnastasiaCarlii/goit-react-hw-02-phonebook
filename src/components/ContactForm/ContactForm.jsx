import React, { Component } from 'react';

import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.formContainer} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={css.formInput}
            autoComplete="off"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            className={css.formInput}
            autoComplete="off"
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
