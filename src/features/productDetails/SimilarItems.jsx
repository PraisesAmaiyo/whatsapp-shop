import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';
import CustomSwiper from '../../ui/CustomSwiper';

import { similarItems } from './storeProductInfo';

const StyleSimilarItems = styled.section`
  padding: 4rem 0;
`;

const SimilarItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0;
  }
`;

const SimilarItemsContainer = styled.div`
  margin-bottom: 3rem;
`;

const SimilarItemsProduct = styled.div`
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

    .SimilarItems-category_actions {
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

const SimilarItemsImageContainer = styled.div`
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

const SimilarItemsCategoryActions = styled.div`
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

function SimilarItems() {
  const navigate = useNavigate();

  const slides = similarItems.map((item) => {
    const {
      id,
      similarItemsImage,
      similarItemsName,
      similarItemsPrice,
      similarItemsDiscount,
      wishlist,
    } = item;

    return (
      <SimilarItemsProduct key={id} onClick={() => navigate('/products')}>
        <SimilarItemsImageContainer>
          <DiscountTag className="discount-tag">
            {`-${similarItemsDiscount}%`}
          </DiscountTag>
          <WishlistContainer>
            <WishlistIcon type={wishlist ? true : ''} />
          </WishlistContainer>
          <ProductImage
            src={similarItemsImage}
            alt={`picture of ${similarItemsName} `}
          />
        </SimilarItemsImageContainer>
        <SimilarItemsCategoryActions className="SimilarItems-category_actions">
          <div>
            <Heading as="h4">{similarItemsName}</Heading>
            <span>
              <span className="naira-sign">₦</span>
              {`${similarItemsPrice}`}
            </span>
          </div>

          <div>
            <FaShoppingCart />
          </div>
        </SimilarItemsCategoryActions>
      </SimilarItemsProduct>
    );
  });

  return (
    <StyleSimilarItems>
      <Row type="vertical">
        <SimilarItemsHeader>
          <Heading as="h1">Discover similar items</Heading>

          <Button
            variation="primary"
            size="large"
            onClick={() => navigate('/products')}
          >
            View all products <FaArrowRight />
          </Button>
        </SimilarItemsHeader>

        <SimilarItemsContainer>
          <CustomSwiper slides={slides} />
        </SimilarItemsContainer>
      </Row>
    </StyleSimilarItems>
  );
}

export default SimilarItems;
