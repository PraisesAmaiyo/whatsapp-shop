import { useEffect, useState } from 'react';

import 'react-country-state-city/dist/react-country-state-city.css';

import { GetCountries, GetState, GetCity } from 'react-country-state-city';
import Select from './Select';

function CountryStateCity() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState('');
  const [cityid, setCityid] = useState('');

  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const NIGERIA_ID = 161;

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
      const nigeria = result.find((country) => country.id === NIGERIA_ID);
      if (nigeria) {
        setCountryid(nigeria.id);
        GetState(nigeria.id).then((states) => {
          setStateList(states);
        });
      }
    });
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryId = parseInt(e.target.value, 10);
    setCountryid(selectedCountryId);
    setStateid('');
    setCityid('');
    setStateList([]);
    setCityList([]);

    GetState(selectedCountryId).then((result) => {
      setStateList(result);
    });
  };

  const handleStateChange = (e) => {
    const selectedStateId = parseInt(e.target.value, 10);
    setStateid(selectedStateId);
    setCityid('');
    setCityList([]);

    GetCity(countryid, selectedStateId).then((result) => {
      setCityList(result);
    });
  };

  return (
    <div>
      <h6>Country</h6>
      <Select
        onChange={handleCountryChange}
        value={countryid}
        options={countriesList}
      />

      <h6>State</h6>
      <Select
        onChange={handleStateChange}
        value={stateid}
        options={stateList}
        type={'white'}
        variation={'state'}
      />

      <h6>City</h6>
      <Select
        onChange={(e) => {
          const selectedCityId = parseInt(e.target.value, 10);
          setCityid(selectedCityId);
        }}
        value={cityid}
        options={cityList}
        variation={'city'}
      />
      {/* <option value="" disabled>
          Select City
        </option>
        {cityList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </Select> */}
    </div>
  );
}

export default CountryStateCity;
