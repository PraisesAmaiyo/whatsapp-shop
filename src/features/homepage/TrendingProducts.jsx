import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import { getTrendingProducts } from '../../services/ApiProducts';
import { useAddItemToCart } from '../../context/AddItemToCartContext';
import { formatNumber } from '../../utils/helpers';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';
import Spinner from '../../ui/Spinner';

const StyledTrendingProducts = styled.section`
  padding: 4rem 0;
`;

const TrendingProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrendingProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, max-content);
  gap: 3rem 1.5rem;
`;

const TrendingProduct = styled.div`
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

    .trending-category_actions {
      background-color: var(--color-brand-800);
    }

    img {
      transform: scale(1.05);
    }
  }

  span {
    font-size: 1.2rem;
  }
`;

const TrendingImageContainer = styled.div`
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

const TrendingCategoryActions = styled.div`
  background-color: var(--color-brand-700);
  border-radius: var(--border-radius-lg);
  height: 7rem;
  padding: 1rem;
  color: var(--color-grey-0);

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

    &.disabled {
      cursor: not-allowed;
      color: var(--color-grey-500);
      background-color: var(--color-grey-300);
    }
  }
`;

function TrendingProducts() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { cartItems, addItemToCart } = useAddItemToCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingProducts = await getTrendingProducts();
        setTrendingProducts(trendingProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  function handleProductClick(id) {
    navigate(`/products/${id}`);
  }

  function handleAddToCart(event, trendingProduct) {
    event.stopPropagation();

    const isInCart = cartItems.some((item) => item.id === trendingProduct.id);

    if (!isInCart) {
      addItemToCart(trendingProduct);
      toast.success(`${trendingProduct.newArrivalName} Added to Cart 😎.`);
    } else {
      toast.error(
        `${trendingProduct.newArrivalName} already added to Cart 🙂.`
      );
    }
  }

  return (
    <StyledTrendingProducts>
      <Row type="vertical">
        <TrendingProductHeader>
          <Heading as="h1">
            Trending products <br /> for you!
          </Heading>

          <Button
            variation="primary"
            size="large"
            onClick={() => navigate('/products')}
          >
            View all products <FaArrowRight />
          </Button>
        </TrendingProductHeader>
        {isLoading ? (
          <Spinner />
        ) : (
          <TrendingProductsContainer>
            {trendingProducts.map((trendingProduct, index) => {
              const {
                id,
                newArrivalImage,
                newArrivalName,
                newArrivalPrice,
                newArrivalDiscount,
                wishlist,
              } = trendingProduct;

              <div class="sc-lcIQwB bQplDd">
                <button class="sc-dtImxT dJPpOf">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="heart-full"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z"></path>
                  </svg>
                </button>
              </div>;

              const isInCart = cartItems.some((item) => item.id === id);

              return (
                <TrendingProduct
                  key={id}
                  onClick={() => handleProductClick(id)}
                >
                  <TrendingImageContainer>
                    <DiscountTag className="discount-tag">{`-${newArrivalDiscount}%`}</DiscountTag>
                    <WishlistContainer>
                      <WishlistIcon type={wishlist ? true : ''} />
                    </WishlistContainer>
                    <ProductImage
                      src={newArrivalImage}
                      alt={`Trending product ${index}`}
                    />
                  </TrendingImageContainer>
                  <TrendingCategoryActions className="trending-category_actions">
                    <div>
                      <Heading as="h4">{newArrivalName}</Heading>
                      <span>
                        <span className="naira-sign">₦</span>
                        {`${formatNumber(newArrivalPrice)}`}
                      </span>
                    </div>

                    <div>
                      <FaShoppingCart
                        onClick={(e) => handleAddToCart(e, trendingProduct)}
                        className={isInCart ? 'disabled' : ''}
                      />
                    </div>
                  </TrendingCategoryActions>
                </TrendingProduct>
              );
            })}
          </TrendingProductsContainer>
        )}
      </Row>
    </StyledTrendingProducts>
  );
}

export default TrendingProducts;
