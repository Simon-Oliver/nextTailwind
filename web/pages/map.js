import React, { useEffect, useState } from 'react';
import styles from './css.module.css';
import Head from "next/head"
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

export default function Test(props) {
<<<<<<< HEAD
const [cv, setCv] = useState({})
const [formFields, setFormFields] = useState([
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
    {id:"jobTitle", type:"text"},
])
const [pageIsMounted, setPageIsMounted] = useState(false)
const [location, setLocation] = useState([0,0])


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

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX;

useEffect(() => {
    if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition(function(position) {
          console.log({ lat: position.coords.latitude, lng: position.coords.longitude });
            setLocation([position.coords.latitude, position.coords.longitude ])
        });  
      }

    setPageIsMounted(true)
      const map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [8.710496599999999, 47.345714099999995],
        zoom:17
      });
}, [])




  return (
    <div className={styles.container}>
        <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        </Head>
      <form onChange={(e)=> getFormOptions(e)}>
          {renderInputfields(formFields)}
      </form>
      <button onClick={addField}>Add</button>
      <div id="my-map" style={{ height: 500, width: 500 }} />
=======
  const [cv, setCv] = useState({});
  const [formFields, setFormFields] = useState([
    { id: 'jobTitle', type: 'text' },
    { id: 'jobTitle', type: 'text' },
    { id: 'jobTitle', type: 'text' },
    { id: 'jobTitle', type: 'text' },
    { id: 'jobTitle', type: 'text' },
    { id: 'jobTitle', type: 'text' },
  ]);

  const getFormOptions = (e) => {
    e.preventDefault();
    setCv({ ...cv, [e.target.id]: e.target.value });
  };

  const addField = () => {
    setFormFields([...formFields, { id: 'startDates', type: 'date' }]);
  };

  const renderInputfields = (fields) => {
    return fields.map((e, index) => {
      return (
        <div className="rounded-md shadow-sm -space-y-px">
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type={e.type}
            id={`${e.id}${index}`}
            name={`${e.id}${index}`}
          ></input>
        </div>
      );
    });
  };

  useEffect(() => {
    console.log(cv);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className={`${styles.container} mt-8 space-y-6`}>
        <form onChange={(e) => getFormOptions(e)}>{renderInputfields(formFields)}</form>
        <button onClick={addField}>Add</button>
      </div>
>>>>>>> 28bd3cbd59244e75f96690b3a7e10655aec49986
    </div>
  );
}
