import { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';

export class Filter extends Component {
  handleChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    const { filter } = this.props;
    return (
      <>
        <Label htmlFor="input-search">Find contacts by name</Label>
        <Input
          type="text"
          id="input-search"
          onChange={this.handleChange}
          name="filter"
          value={filter}
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
