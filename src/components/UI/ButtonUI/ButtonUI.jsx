import React from 'react'
import './ButtonUI.css'

export const ButtonUI = ( {styles, event, text} ) => {
  return (
    <>
        <button onClick={event} className={styles}>{text}</button>
    </>
  )
}
