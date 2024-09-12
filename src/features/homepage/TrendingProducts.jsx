import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import { trendingProducts } from './store';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import DiscountTag from '../../ui/DiscountTag';
import WishlistIcon from '../../ui/WishlistIcon';
import { useAddItemToCart } from '../../context/AddItemToCartContext';
import { formatNumber } from '../../utils/helpers';
import toast from 'react-hot-toast';

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
  const navigate = useNavigate();

  const { cartItems, addItemToCart } = useAddItemToCart();

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

            const isInCart = cartItems.some((item) => item.id === id);

            return (
              <TrendingProduct key={id} onClick={() => handleProductClick(id)}>
                <TrendingImageContainer>
                  <DiscountTag className="discount-tag">{`-${newArrivalDiscount}%`}</DiscountTag>
                  <WishlistContainer>
                    <WishlistIcon type={wishlist ? true : ''} />
                  </WishlistContainer>
                  <ProductImage
                    src={newArrivalImage}
                    alt={`Category ${index}`}
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
      </Row>
    </StyledTrendingProducts>
  );
}

export default TrendingProducts;
