import styled from 'styled-components';
import Checkbox from '../../ui/Checkbox';
import { useState } from 'react';
import { formatNumber } from '../../utils/helpers';
import { useShipping } from '../../context/ShippingContext';

const Header = styled.div`
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  margin: 2rem 0;

  p {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

const CheckboxGroup = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const shippingLocations = [
  {
    location: 'Customer',
    amount: 'Free',
  },
  {
    location: 'Ozoro',
    amount: 1500,
  },
  {
    location: 'Oleh',
    amount: 1500,
  },
  {
    location: 'Ughelli',
    amount: 1000,
  },
  {
    location: 'Agbor',
    amount: 2500,
  },
  {
    location: 'Agbarho',
    amount: 700,
  },
  {
    location: 'Benin',
    amount: 2500,
  },
  {
    location: 'Abraka',
    amount: 2000,
  },
  {
    location: 'Lagos',
    amount: 3500,
  },
];

// console.log(object);

function Shipping() {
  const { shippingDetails, updateShippingDetails } = useShipping();
  const [selectedLocation, setSelectedLocation] = useState(
    shippingDetails.location
  );

  const handleCheckboxChange = (location, amount) => {
    const newLocation = selectedLocation === location ? null : location;

    setSelectedLocation(newLocation);

    updateShippingDetails(newLocation, newLocation ? amount : null);
  };

  return (
    <div>
      <Header>
        <span>Shipping Details</span>
        <p>
          Choose the nearest Shipping option closest to your location. If your
          parcel is large you will be contacted and updated on any price change
        </p>
      </Header>
      {shippingLocations.map((shipping) => {
        const { location, amount } = shipping;
        //   console.log(location);

        return (
          <Box
            key={location}
            onClick={() => handleCheckboxChange(location, amount)}
            id={location}
          >
            <Checkbox
              checked={selectedLocation === location}
              onChange={() => handleCheckboxChange(location, amount)}
              id={location}
            >
              <CheckboxGroup>
                {location === 'Customer' ? (
                  <p>
                    Pickup by <strong>{location}</strong>
                  </p>
                ) : (
                  <p>
                    Shipping to <strong>{location}</strong>
                  </p>
                )}

                <strong>
                  {location === 'Customer' ? (
                    <span>Free</span>
                  ) : (
                    <span className="naira-sign">₦{formatNumber(amount)}</span>
                  )}
                </strong>
              </CheckboxGroup>
            </Checkbox>
          </Box>
        );
      })}
    </div>
  );
}

export default Shipping;
