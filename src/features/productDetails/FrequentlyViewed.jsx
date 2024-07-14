import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';
import CustomSwiper from '../../ui/CustomSwiper';

import { frequentlyViewedItems } from './storeProductInfo';

const StyleFrequentlyViewed = styled.section`
  padding: 4rem 0;
`;

const FrequentlyViewedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0;
  }
`;

const FrequentlyViewedContainer = styled.div`
  margin-bottom: 3rem;
`;

const FrequentlyViewedProduct = styled.div`
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
    cursor: pointer;

    .discount-tag {
      background-color: var(--color-brand-700);
    }

    .FrequentlyViewed-category_actions {
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

const FrequentlyViewedImageContainer = styled.div`
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
  /* height: 25rem; */
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const WishlistContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--color-brand-100);
  border: none;
  padding: 0.4rem;
  border-radius: 100px;
  transition: all 0.2s;
  box-shadow: var(--shadow-lg);
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    transition: all 0.3s;
  }
`;

const FrequentlyViewedCategoryActions = styled.div`
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

    span {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  & div svg {
    font-size: 4rem;
    background-color: var(--color-gold-500);
    border-radius: 50%;
    padding: 1rem;
    color: var(--color-grey-0);
    position: relative;
    z-index: 1;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      outline: 1.5px solid var(--color-gold-600);
      color: var(--color-gold-500);
      background-color: var(--color-grey-0);
      box-shadow: var(--shadow-sm);
    }
  }
`;

function FrequentlyViewed() {
  const navigate = useNavigate();

  const slides = frequentlyViewedItems.map((item) => {
    const {
      id,
      frequentlyViewedItemsImage,
      frequentlyViewedItemsName,
      frequentlyViewedItemsPrice,
      frequentlyViewedItemsDiscount,
      wishlist,
    } = item;

    return (
      <FrequentlyViewedProduct key={id} onClick={() => navigate('/products')}>
        <FrequentlyViewedImageContainer>
          <DiscountTag className="discount-tag">
            {`-${frequentlyViewedItemsDiscount}%`}
          </DiscountTag>
          <WishlistContainer>
            <WishlistIcon type={wishlist ? true : ''} />
          </WishlistContainer>
          <ProductImage
            src={frequentlyViewedItemsImage}
            alt={`picture of ${frequentlyViewedItemsName} `}
          />
        </FrequentlyViewedImageContainer>
        <FrequentlyViewedCategoryActions className="FrequentlyViewed-category_actions">
          <div>
            <Heading as="h4">{frequentlyViewedItemsName}</Heading>
            <span>
              <span className="naira-sign">₦</span>
              {`${frequentlyViewedItemsPrice}`}
            </span>
          </div>

          <div>
            <FaShoppingCart />
          </div>
        </FrequentlyViewedCategoryActions>
      </FrequentlyViewedProduct>
    );
  });

  return (
    <StyleFrequentlyViewed>
      <Row type="vertical">
        <FrequentlyViewedHeader>
          <Heading as="h1">Customers frequrntly viewed</Heading>

          <Button
            variation="primary"
            size="large"
            onClick={() => navigate('/products')}
          >
            View all products <FaArrowRight />
          </Button>
        </FrequentlyViewedHeader>

        <FrequentlyViewedContainer>
          <CustomSwiper slides={slides} />
        </FrequentlyViewedContainer>
      </Row>
    </StyleFrequentlyViewed>
  );
}

export default FrequentlyViewed;
