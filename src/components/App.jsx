import React from 'react';

// Data
import contacts from '../contacts';

// Components
import Card from './Card';

function createCard(contacts) {
  return(
    <Card 
      key={contacts.id}
      name={contacts.name}
      address={contacts.address}
      email={contacts.email}
      phone={contacts.phone}
    />
  );
};

function App() {
  return(
    // With Map Loop
    <div>
      {contacts.map(createCard)}
    </div>
    
    // Without Map Loop
    //<Card 
    //  name="Keith"
    //  address="123 Main St"
    //  email="something@email.com"
    //  phone="970-456-1237"
    ///>
  );
};

export default App;