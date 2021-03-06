import React, { useEffect, useState } from 'react';
import styles from './css.module.css';
import Head from "next/head"
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

export default function Test(props) {
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
    </div>
  );
}
