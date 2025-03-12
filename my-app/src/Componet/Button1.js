import React, { useState } from 'react'
import styles from './Button.module.css'
export default function Button1() {
    const [classes,setClasses] = useState(true);

    const toggleClasses = () => {
        setClasses(!classes);
    }
  return (
    <div>
      <h1>Button 1</h1>
      <button  className={classes ? styles.btn1 : styles.btn2} >Button </button>
      <button onClick={toggleClasses} >Toggle Class</button>
    </div>
  )
}
