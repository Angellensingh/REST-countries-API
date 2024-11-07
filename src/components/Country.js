
import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => (
  <div className="bg-white rounded-lg shadow p-4 dark:bg-DarkModeElements dark:shadow dark:text-white">
   <Link to={`/country/${country.name}`} >
      <img src={country.flag} alt={country.name} className="w-full h-32 object-cover rounded-t-lg" />
    </Link>
    <h2 className="text-lg font-semibold mt-2">{country.name}</h2>
    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> {country.region}</p>
    <p><strong>Capital:</strong> {country.capital}</p>
  </div>
);

export default Country;

