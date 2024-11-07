import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import countries from '../data.json';

const OneCountry = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  
  const country = countries.find((c) => c.name === countryName);



  return (
    <div className="p-6 dark:bg-DarkModeBackground dark:text-white min-h-svh">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-white text-black rounded-lg shadow  dark:bg-DarkModeBackground dark:shadow dark:text-white">
      &larr; Back
      </button>
      <br />
      <div className="bg-white rounded-lg shadow p-20 inline-flex ml-20  dark:bg-DarkModeBackground ">
           
          <div className=''> <img src={country.flag} alt={country.name} className="h-64  w-full object-cover rounded-lg " /></div>
            <div className=' inline-flex ml-40  '>               
                    <div className='text-slate-700 '>
                        <h2 className="ml-50 font-bold text-gray-900 text-2xl lg:text-4xl dark:text-light">{country.name}</h2>
                        <p className="mt-4 dark:text-light"><strong>Native Name:</strong> {country.nativeName}</p>
                        <p className=' dark:text-light'><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p className=' dark:text-light'><strong>Region:</strong> {country.region}</p>
                        <p className=' dark:text-light'><strong>subregion: </strong>{country.subregion}</p>
                        <p className=' dark:text-light'><strong>Capital:</strong> {country.capital}</p>
                    </div>
                    <div className='mt-14 ml-16 text-slate-700'>
                        <p className=' dark:text-light'><strong>TopLevelDomain:</strong>{country.topLevelDomain}</p>
                        <p className=' dark:text-light'><strong>currencies:</strong> {country.currencies[0].name}</p>
                        <p className=' dark:text-light'><strong>Languages:</strong> {country.languages[0].name}</p>
                    </div>
                
            </div>
      </div>
    </div>
  );
};

export default OneCountry;
