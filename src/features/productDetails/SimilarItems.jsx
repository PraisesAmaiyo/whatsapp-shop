import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import { useAddItemToCart } from '../../context/AddItemToCartContext';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';
import CustomSwiper from '../../ui/CustomSwiper';

import { useEffect, useState } from 'react';
import { getSimilarItems } from '../../services/ApiProducts';
import { formatNumber } from '../../utils/helpers';
import Spinner from '../../ui/Spinner';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { similarItems } from '../homepage/store';

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

    &.disabled {
      cursor: not-allowed;
      color: var(--color-grey-500);
      background-color: var(--color-grey-300);
    }
  }
`;

function SimilarItems() {
  const [similarItemsProducts, setSimilarItemsProducts] = useState([]);

  //   const [similarItemsProducts, setSimilarItemsProducts] = useLocalStorageState(
  //     [],
  //     'similarItemsProducts'
  //   );

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id: URLId } = useParams();

  const { cartItems, addItemToCart } = useAddItemToCart();

  const hasDataChanged = (localData, apiData) => {
    return JSON.stringify(localData) !== JSON.stringify(apiData);
  };

  useEffect(() => {
    const fetchSimilarItems = async () => {
      try {
        const cachedItems = JSON.parse(
          localStorage.getItem('similarItemsProducts')
        );
        setSimilarItemsProducts(cachedItems || []);
        setIsLoading(false);

        const freshData = await getSimilarItems();

        if (hasDataChanged(cachedItems, freshData)) {
          setSimilarItemsProducts(freshData);
          localStorage.setItem(
            'similarItemsProducts',
            JSON.stringify(freshData)
          );
        }
      } catch (err) {
        setError('Failed to fetch similar items');
      }
    };

    fetchSimilarItems();
  }, []);

  if (error) return <p>Error: {error}</p>;

  function handleProductClick(id) {
    navigate(`/products/${id}`);
  }

  function handleAddToCart(event, similarItem) {
    event.stopPropagation();

    const isInCart = cartItems.some((item) => item.id === similarItem.id);

    if (!isInCart) {
      addItemToCart(similarItem);
      toast.success(`${similarItem.similarItemsName} Added to Cart 😎.`);
    } else {
      toast.error(`${similarItem.similarItemsName} already added to Cart 🙂.`);
    }
  }

  //   if (isLoading || !similarItemsProducts) {
  //     return;
  //   }

  const slides = similarItemsProducts
    .filter((similarItem) => similarItem.id !== URLId)
    .map((similarItem) => {
      const {
        id,
        similarItemsImage,
        similarItemsName,
        similarItemsPrice,
        similarItemsDiscount,
        wishlist,
      } = similarItem;

      const isInCart = cartItems.some((item) => item.id === id);

      return (
        <SimilarItemsProduct key={id} onClick={() => handleProductClick(id)}>
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
                {`${formatNumber(similarItemsPrice)}`}
              </span>
            </div>

            <div>
              <FaShoppingCart
                onClick={(e) => handleAddToCart(e, similarItem)}
                className={isInCart ? 'disabled' : ''}
              />
            </div>
          </SimilarItemsCategoryActions>
        </SimilarItemsProduct>
      );
    });

  return (
    <StyleSimilarItems>
      <Row type="vertical">
        <SimilarItemsHeader>
          <Heading as="h1">Discover Similar Items</Heading>

          <Button
            variation="primary"
            size="large"
            onClick={() => navigate('/products')}
          >
            View all products <FaArrowRight />
          </Button>
        </SimilarItemsHeader>

        <SimilarItemsContainer>
          {isLoading ? (
            <Spinner />
          ) : similarItemsProducts.length > 0 ? (
            <CustomSwiper slides={slides} />
          ) : (
            <Heading as="h2">There are no SImilar Items available</Heading>
          )}
        </SimilarItemsContainer>
      </Row>
    </StyleSimilarItems>
  );
}

export default SimilarItems;
