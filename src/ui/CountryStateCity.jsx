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

  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const NIGERIA_ID = 161;

  const customCities = {
    316: [
      { id: 'ozoro', name: 'Ozoro' },
      { id: 'oleh2', name: 'Oleh' },
    ],
  };

  useEffect(() => {
    GetCountries()
      .then((result) => {
        setCountriesList(result);
        const nigeria = result.find((country) => country.id === NIGERIA_ID);
        if (nigeria) {
          setCountryid(nigeria.id);
          setLoadingStates(true);
          GetState(nigeria.id)
            .then((states) => {
              setStateList(states);
              setLoadingStates(false);
            })
            .catch((error) => {
              setLoadingStates(false);
            });
        }
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryId = parseInt(e.target.value, 10);
    setCountryid(selectedCountryId);
    setStateid('');
    setCityid('');
    setStateList([]);
    setCityList([]);

    setLoadingStates(true);
    GetState(selectedCountryId)
      .then((result) => {
        setStateList(result);
        setLoadingStates(false);
      })
      .catch((error) => {
        console.error(
          `Error fetching states for country ${selectedCountryId}:`,
          error
        );
        setLoadingStates(false);
      });
  };

  const handleStateChange = (e) => {
    const selectedStateId = parseInt(e.target.value, 10);
    setStateid(selectedStateId);
    setCityid('');
    setCityList([]);

    setLoadingCities(true);
    GetCity(countryid, selectedStateId)
      .then((result) => {
        const additionalCities = customCities[selectedStateId] || [];
        setCityList([...result, ...additionalCities]);
        setLoadingCities(false);
      })
      .catch((error) => {
        console.error(
          `Error fetching cities for state ${selectedStateId}:`,
          error
        );
        setLoadingCities(false);
      });
  };

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    setCityid(selectedCityId);
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
          variation={loadingStates ? 'loading' : 'state'}
          id="state"
        />
      </FormRowVertical>

      <FormRowVertical label="City">
        <Select
          onChange={handleCityChange}
          value={cityid}
          options={cityList}
          variation={loadingStates ? 'loading' : 'city'}
          id="city"
        />
      </FormRowVertical>
    </InputGroup>
  );
}

export default CountryStateCity;
