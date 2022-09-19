import React from 'react'
import styles from './Filter.module.css'

export default function Filter({onChangeFilter}) {
  return (
    <>
     <p className={styles.pFilter}>Find contacts by name :</p>
        <label onChange={event => onChangeFilter(event.target.value)}>
          <input name="filter" />
        </label>
    </>
   
  )
}
