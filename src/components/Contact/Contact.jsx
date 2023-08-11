import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './Contact.styled';

export class Contact extends Component {
  handleDelete = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { name, number, id } = this.props;
    return (
      <ContactItem>
        <p>
          {name}: {number}
        </p>
        <DeleteButton
          type="button"
          onClick={() => {
            this.handleDelete(id);
          }}
        >
          Delete
        </DeleteButton>
      </ContactItem>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
