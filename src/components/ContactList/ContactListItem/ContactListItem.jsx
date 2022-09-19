import React from 'react'

export default function ContactListItem({id , name , number , onRemove}) {
  return (
  
    <li  key={id}>
     <span> {name} </span>
     <span> {number} </span>
     <button onClick={onRemove} type="button">
      Delete
      </button>
    </li>
    

  )
}
