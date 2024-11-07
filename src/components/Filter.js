import React from 'react';

const Filter = ({ setRegion }) => (
  <select className="p-2 rounded-lg shadow w-full md:w-1/4 mt-4 md:mt-0 dark:bg-DarkModeElements dark:shadow dark:text-white" onChange={(e) => setRegion(e.target.value)}>
    <option value="">Filter by Region</option>
    <option value="">All</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
);

export default Filter;