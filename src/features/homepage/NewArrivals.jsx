import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';

import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import { newArrivals } from './store';

const StyledNewArrivals = styled.section`
  padding: 4rem 0;
  margin-bottom: 6rem;
`;

const NewArrivalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0;
  }
`;

const NewArrivalsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, max-content);
  gap: 3rem 1.5rem;
`;

const NewArrivalProduct = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: var(--color-brand-100);
  width: 100%;
  min-width: 25rem;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  transition: all 0.3s;

  &:hover {
    box-shadow: var(--shadow-md);

    .discount-tag {
      background-color: var(--color-brand-700);
    }

    .newArrival-category_actions {
      background-color: var(--color-brand-800);
      color: var(--color-grey-0);
    }

    img {
      transform: scale(1.05);
    }
  }

  span {
    font-size: 1.2rem;
  }
`;

const NewArrivalImageContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.8rem;
  height: 25rem;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 25rem;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const NewArrivalCategoryActions = styled.div`
  background-color: var(--color-brand-100);
  border-radius: var(--border-radius-lg);
  height: 7rem;
  padding: 1rem;
  color: var(--color-brand-800);

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    text-align: left;
  }

  & div svg {
    font-size: 4rem;
    background-color: var(--color-grey-0);
    border-radius: 50%;
    padding: 1rem;
    color: var(--color-gold-500);
    position: relative;
    z-index: 1;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      outline: 1.5px solid var(--color-gold-600);
      color: var(--color-gold-600);
    }
  }
`;

function NewArrivals() {
  return (
    <StyledNewArrivals>
      <Row type="vertical">
        <NewArrivalHeader>
          <Heading as="h1">New Arrivals</Heading>

          <Button variation="primary" size="large">
            View all products <FaArrowRight />
          </Button>
        </NewArrivalHeader>

        <NewArrivalsContainer>
          {newArrivals.map((newArrival) => {
            const {
              id,
              newArrivalImage,
              newArrivalName,
              newArrivalPrice,
              newArrivalDiscount,
            } = newArrival;

            return (
              <NewArrivalProduct key={id}>
                <NewArrivalImageContainer>
                  <DiscountTag className="discount-tag">
                    {`-${newArrivalDiscount}%`}
                  </DiscountTag>
                  <WishlistIcon type="wishlisted" />
                  <ProductImage
                    src={newArrivalImage}
                    alt={`picture of ${newArrivalName} `}
                  />
                </NewArrivalImageContainer>
                <NewArrivalCategoryActions className="newArrival-category_actions">
                  <div>
                    <Heading as="h4">{newArrivalName}</Heading>
                    <span>{`₦${newArrivalPrice}`}</span>
                    {/* <Heading as="h4">₦255,000</Heading> */}
                  </div>

                  <div>
                    <FaShoppingCart />
                  </div>
                </NewArrivalCategoryActions>
              </NewArrivalProduct>
            );
          })}
        </NewArrivalsContainer>
      </Row>
    </StyledNewArrivals>
  );
}

export default NewArrivals;
