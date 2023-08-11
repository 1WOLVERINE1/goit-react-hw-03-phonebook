import { Contact } from 'components/Contact/Contact';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={this.props.onDeleteContact}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
