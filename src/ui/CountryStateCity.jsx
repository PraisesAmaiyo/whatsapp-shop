import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { GetCountries, GetState, GetCity } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';

import Select from './Select';
import FormRowVertical from './FormRowVertical';

const InputGroup = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
`;

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
    <InputGroup>
      <FormRowVertical label="Country">
        <Select
          onChange={handleCountryChange}
          value={countryid}
          options={countriesList}
          id="country"
        />
      </FormRowVertical>

      <FormRowVertical label="State">
        <Select
          onChange={handleStateChange}
          value={stateid}
          options={stateList}
          type={'white'}
          variation={'state'}
          id="state"
        />
      </FormRowVertical>

      <FormRowVertical label="City">
        <Select
          onChange={(e) => {
            const selectedCityId = parseInt(e.target.value, 10);
            setCityid(selectedCityId);
          }}
          value={cityid}
          options={cityList}
          variation={'city'}
          id="city"
        />
      </FormRowVertical>
    </InputGroup>
  );
}

export default CountryStateCity;
