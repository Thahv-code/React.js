import React, { Component } from 'react';

interface State {
  email: string;
}

class EmailForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email: this.state.email });
  };

  render() {
    return (
      <>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default EmailForm;