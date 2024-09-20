import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { FaShoppingCart } from 'react-icons/fa';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';
import LoadMore from '../../ui/LoadMore';
import Benefits from '../../ui/Benefits';
import Spinner from '../../ui/Spinner';

import { useAddItemToCart } from '../../context/AddItemToCartContext';
import { formatNumber } from '../../utils/helpers';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

import {
  getFrequentlyViewed,
  getNewArrivals,
  getSimilarItems,
  getTrendingProducts,
} from '../../services/ApiProducts';

const StyledAllProducts = styled.section`
  padding: 4rem 0;
`;

const AllProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, max-content);
  gap: 3rem 1.5rem;
  margin-bottom: 3rem;
`;

const AllProduct = styled.div`
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

const AllProductImageContainer = styled.div`
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

const AllProductCategoryActions = styled.div`
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

function AllProducts() {
  const [shuffledProducts, setShuffledProducts] = useLocalStorageState(
    [],
    'shuffledProducts'
  );

  //   const [shuffledProducts, setShuffledProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //   console.log('shuffledProducts', shuffledProducts);

  const { cartItems, addItemToCart } = useAddItemToCart();
  const navigate = useNavigate();

  // Fisher-Yates Shuffle algorithm
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastShuffle = localStorage.getItem('lastShuffleTime');
        const now = Date.now();

        // Check if we have shuffled products and the shuffle is within 24 hours
        if (
          shuffledProducts.length > 0 &&
          lastShuffle &&
          now - lastShuffle <= 24 * 60 * 60 * 1000
        ) {
          setIsLoading(false); // We have recent shuffled data, no need to fetch
          return;
        }

        // Otherwise, fetch new data and shuffle
        const newArrivalsProducts = await getNewArrivals();
        const similarItemsProducts = await getSimilarItems();
        const frequentlyViewedProducts = await getFrequentlyViewed();
        const trendingProductsProducts = await getTrendingProducts();

        // Combine and shuffle the data
        const combinedProducts = [
          ...newArrivalsProducts,
          ...similarItemsProducts,
          ...frequentlyViewedProducts,
          ...trendingProductsProducts,
        ];
        const shuffled = shuffleArray(combinedProducts);

        // Store the shuffled products and update the shuffle time
        setShuffledProducts(shuffled);
        localStorage.setItem('lastShuffleTime', now);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [shuffledProducts, setShuffledProducts]);

  if (error) return <p>Error: {error}</p>;

  function handleProductClick(id) {
    navigate(`/products/${id}`);
  }

  function handleAddToCart(event, shuffledProduct) {
    event.stopPropagation();

    const shuffledProductName =
      shuffledProduct.newArrivalName ||
      shuffledProduct.similarItemsName ||
      shuffledProduct.frequentlyViewedItemsName;

    const isInCart = cartItems.some((item) => item.id === shuffledProduct.id);

    if (!isInCart) {
      addItemToCart(shuffledProduct);
      toast.success(`${shuffledProductName} Added to Cart 😎.`);
    } else {
      toast.error(`${shuffledProductName} already added to Cart 🙂.`);
    }
  }

  return (
    <StyledAllProducts>
      <Row type="vertical">
        {isLoading ? (
          <Spinner />
        ) : (
          <AllProductsContainer>
            {shuffledProducts.map((shuffledProduct) => {
              const {
                id,
                newArrivalImage,
                newArrivalName,
                newArrivalPrice,
                newArrivalDiscount,
                similarItemsImage,
                similarItemsName,
                similarItemsPrice,
                similarItemsDiscount,
                frequentlyViewedItemsImage,
                frequentlyViewedItemsName,
                frequentlyViewedItemsPrice,
                frequentlyViewedItemsDiscount,
                wishlist,
              } = shuffledProduct;

              const shuffledProductPrice =
                newArrivalPrice ||
                similarItemsPrice ||
                frequentlyViewedItemsPrice;

              const shuffledProductName =
                newArrivalName || similarItemsName || frequentlyViewedItemsName;

              const shuffledProductImage =
                newArrivalImage ||
                similarItemsImage ||
                frequentlyViewedItemsImage;

              const shuffledProductDiscount =
                newArrivalDiscount ||
                similarItemsDiscount ||
                frequentlyViewedItemsDiscount;

              const isInCart = cartItems.some((item) => item.id === id);

              return (
                <AllProduct key={id} onClick={() => handleProductClick(id)}>
                  <AllProductImageContainer>
                    <DiscountTag className="discount-tag">
                      {`-${shuffledProductDiscount}%`}
                    </DiscountTag>
                    <WishlistContainer>
                      <WishlistIcon type={wishlist ? true : ''} />
                    </WishlistContainer>
                    <ProductImage
                      src={shuffledProductImage}
                      alt={`picture of ${shuffledProductName} `}
                    />
                  </AllProductImageContainer>
                  <AllProductCategoryActions className="newArrival-category_actions">
                    <div>
                      <Heading as="h4">{shuffledProductName}</Heading>
                      <span>
                        <span className="naira-sign">₦</span>
                        {`${formatNumber(shuffledProductPrice)}`}
                      </span>
                    </div>

                    <div>
                      <FaShoppingCart
                        onClick={(e) => handleAddToCart(e, shuffledProduct)}
                        className={isInCart ? 'disabled' : ''}
                      />
                    </div>
                  </AllProductCategoryActions>
                </AllProduct>
              );
            })}
          </AllProductsContainer>
        )}

        <LoadMore />
      </Row>
      <Benefits />
    </StyledAllProducts>
  );
}

export default AllProducts;
