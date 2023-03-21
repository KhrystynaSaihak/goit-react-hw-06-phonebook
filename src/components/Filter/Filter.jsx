import { FieldStyled } from './Filter.styled';
import { Label } from './../DataInputForm/DataInputForm.styled';
import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Label>
        Find contacts by name
        <FieldStyled
          type="search"
          name="filter"
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </Label>
    </>
  );
};
