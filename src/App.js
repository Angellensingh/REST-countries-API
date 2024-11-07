
import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import Country from './components/Country';
import countries from './data.json';
import OneCountry from './components/OneCountry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [region, setRegion] = useState(''); 
  const [search, setSearch] = useState('');

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region ? country.region === region : true) 
  );

  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={
    
              <div className="p-6 dark:bg-DarkModeBackground min-h-svh">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <Search setSearch={setSearch} />
                  <Filter setRegion={setRegion} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {filteredCountries.map((country) => (
                    <Country key={country.name} country={country} />
                  ))}
                </div>
              </div>}
              />
          
              <Route path="/country/:countryName" element={<OneCountry/>} />
      </Routes>
      
        </BrowserRouter>
    </>
  );
}

export default App;