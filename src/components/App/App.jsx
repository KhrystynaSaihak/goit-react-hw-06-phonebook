import React from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Section } from 'components/Section/Section';
import { DataInputForm } from 'components/DataInputForm/DataInputForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <DataInputForm></DataInputForm>
      </Section>

      <Section title="Contacts">
        <Filter></Filter>
        <Contacts></Contacts>
      </Section>
      <NotificationContainer />
    </>
  );
};
