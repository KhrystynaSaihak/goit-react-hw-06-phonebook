import { List, ListItem, Btn } from './Contacts.styled';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contactsSlice';
import { getContactsList, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/exports';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filterQuery = useSelector(getFilter);
  const contactsList = useSelector(getContactsList);

  const normalizedFilter = filterQuery.toLowerCase();
  // const deleteContacts = id => {
  //   dispatch(deleteContact(id));
  // };
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <List>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <ListItem key={id}>
              <span>
                {name}, {number}
              </span>

              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Btn>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
