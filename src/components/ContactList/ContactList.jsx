import React from 'react'
import ContactListItem from "./ContactListItem"

export default function ContactList({filter , contacts , onHandleRemoveTask }) {

    let filtredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    
        <ul>
          {filtredContacts.map(({id , name , number}) => {
            return (
                
            <ContactListItem 
              key = {id} 
              id={id}
              name={name}
              number ={number}
              onRemove={() => onHandleRemoveTask(id)}
              />
                
                
          );
       })}
     </ul>
       

  )
}
