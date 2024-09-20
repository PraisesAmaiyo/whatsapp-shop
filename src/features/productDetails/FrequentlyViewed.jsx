import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import { getFrequentlyViewed } from '../../services/ApiProducts';
import { useAddItemToCart } from '../../context/AddItemToCartContext';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';
import CustomSwiper from '../../ui/CustomSwiper';
import Spinner from '../../ui/Spinner';
import { formatNumber } from '../../utils/helpers';

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
  /* background-color: var(--color-brand-100); */
  width: 100%;
  min-width: 25rem;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  opacity: 0;
  transition: opacity 0.5s ease-in;
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

  .visible {
    opacity: 1;
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

    &.disabled {
      cursor: not-allowed;
      color: var(--color-grey-500);
      background-color: var(--color-grey-300);
    }
  }
`;

function FrequentlyViewed() {
  const [frequentlyViewedProducts, setFrequentlyViewedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id: URLId } = useParams();

  const { cartItems, addItemToCart } = useAddItemToCart();

  const hasDataChanged = (localData, apiData) => {
    return JSON.stringify(localData) !== JSON.stringify(apiData);
  };

  useEffect(() => {
    const fetchFrequentlyViewed = async () => {
      try {
        const cachedItems = JSON.parse(
          localStorage.getItem('FrequentlyViewedProducts')
        );
        setFrequentlyViewedProducts(cachedItems || []);
        setIsLoading(false);

        const freshData = await getFrequentlyViewed();

        if (hasDataChanged(cachedItems, freshData)) {
          setFrequentlyViewedProducts(freshData);
          localStorage.setItem(
            'FrequentlyViewedProducts',
            JSON.stringify(freshData)
          );
        }
      } catch (err) {
        setError('Failed to fetch similar items');
      }
    };

    fetchFrequentlyViewed();
  }, []);

  if (error) return <p>Error: {error}</p>;

  function handleProductClick(id) {
    navigate(`/products/${id}`);
  }

  function handleAddToCart(event, frequentlyViewedItem) {
    event.stopPropagation();

    const isInCart = cartItems.some(
      (item) => item.id === frequentlyViewedItem.id
    );

    if (!isInCart) {
      addItemToCart(frequentlyViewedItem);
      toast.success(
        `${frequentlyViewedItem.frequentlyViewedItemsName} Added to Cart 😎.`
      );
    } else {
      toast.error(
        `${frequentlyViewedItem.frequentlyViewedItemsName} aready added to Cart 🙂.`
      );
    }
  }

  //   if (isLoading || !frequentlyViewedProducts) {
  //     return <Spinner />;
  //   }

  const slides = frequentlyViewedProducts
    .filter((frequentlyViewedItem) => frequentlyViewedItem.id !== URLId)
    .map((frequentlyViewedItem) => {
      const {
        id,
        frequentlyViewedItemsImage,
        frequentlyViewedItemsName,
        frequentlyViewedItemsPrice,
        frequentlyViewedItemsDiscount,
        wishlist,
      } = frequentlyViewedItem;

      const isInCart = cartItems.some((item) => item.id === id);

      return (
        <FrequentlyViewedProduct
          key={id}
          className={isLoading ? '' : 'visible'}
          onClick={() => handleProductClick(id)}
        >
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
                {`${formatNumber(frequentlyViewedItemsPrice)}`}
              </span>
            </div>

            <div>
              <FaShoppingCart
                onClick={(e) => handleAddToCart(e, frequentlyViewedItem)}
                className={isInCart ? 'disabled' : ''}
              />
            </div>
          </FrequentlyViewedCategoryActions>
        </FrequentlyViewedProduct>
      );
    });

  return (
    <StyleFrequentlyViewed>
      <Row type="vertical">
        <FrequentlyViewedHeader>
          <Heading as="h1">Customers Frequently Viewed</Heading>

          <Button
            variation="primary"
            size="large"
            onClick={() => navigate('/products')}
          >
            View all products <FaArrowRight />
          </Button>
        </FrequentlyViewedHeader>

        <FrequentlyViewedContainer>
          {isLoading ? (
            <Spinner />
          ) : frequentlyViewedProducts.length > 0 ? (
            <CustomSwiper slides={slides} />
          ) : (
            <Heading as="h2">
              There are no Frequently Viewed Products available
            </Heading>
          )}
        </FrequentlyViewedContainer>
      </Row>
    </StyleFrequentlyViewed>
  );
}

export default FrequentlyViewed;
