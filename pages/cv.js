import React, { useEffect, useState } from 'react';
import styles from './css.module.css';

export default function Test(props) {
const [cv, setCv] = useState({})
const [formFields, setFormFields] = useState([
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
])


const getFormOptions = (e) =>{
    e.preventDefault()
    setCv({...cv, [e.target.id]:e.target.value})
    
}

const addField = () => {
    setFormFields([...formFields,{id:"startDates", type:"date"}])
}


const renderInputfields = (fields) =>{
return fields.map((e,index)=>{
    return (
        <>
        <input type={e.type} id={`${e.id}${index}`} name={`${e.id}${index}`}></input>
        </>
    )
})
}

useEffect(()=>{
    console.log(cv)
})

  return (
    <div className={styles.container}>
      <form onChange={(e)=> getFormOptions(e)}>
          {renderInputfields(formFields)}
      </form>
      <button onClick={addField}>Add</button>
    </div>
  );
}