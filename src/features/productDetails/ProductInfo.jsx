import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { formatNumber } from '../../utils/helpers';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useAddItemToCart } from '../../context/AddItemToCartContext';

import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import UpdateItemQuantity from '../../ui/UpdateItemQuantity';
import Button from '../../ui/Button';
import WishlistIcon from '../../ui/WishlistIcon';
import SimilarItems from './SimilarItems';
import FrequentlyViewed from './FrequentlyViewed';
import Benefits from '../../ui/Benefits';

import {
  trendingProducts,
  newArrivals,
  frequentlyViewedItems,
  similarItems,
} from '../homepage/store';
import { useState } from 'react';

const StyledProductInfoContainer = styled.section`
  padding: 4rem 0;
`;

const ProductMainInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 3rem;
`;

const ProductInfoImage = styled.div`
  height: 50rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: var(--border-radius-lg);
  }
`;

const ProductDiscountAmount = styled.div`
  background-color: var(--color-brand-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  color: var(--color-brand-950);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 4rem;

  span {
    font-size: 1.3rem;
  }
`;

const ProductInfoText = styled.div`
  width: 80%;
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ProductPricing = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0 1.5rem 0;

  .product-slashed_price {
    text-decoration: line-through;
    font-weight: 400;
    opacity: 0.5;
  }
`;

const ProductAvailability = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ProductReviews = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  .reviewRatings {
    display: flex;
    gap: 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  gap: 1rem;
`;

const WishlistContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: var(--border-radius-full);
  border: 1px solid var(--color-brand-400);
  margin-left: auto;
  margin-right: 1.5rem;

  svg {
    font-size: 2.5rem;
    background-color: transparent;
  }

  &:hover {
    background-color: var(--color-brand-200);
    svg {
      background-color: var(--color-brand-200);
      transform: scale(1.1);
    }
  }
`;

const ProductSubInfo = styled.div`
  margin-top: 6rem;
`;

const StyledProductNotFound = styled.main`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function ProductInfo() {
  const { cartItems, addItemToCart } = useAddItemToCart();

  const [itemNumber, setItemNumber] = useState(1);

  //   const navigation = useNavigation();
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  //   const isLoading = navigation.state === 'loading';

  const { id } = useParams();

  const product =
    trendingProducts.find((prod) => prod.id === id) ||
    newArrivals.find((prod) => prod.id === id) ||
    frequentlyViewedItems.find((prod) => prod.id === id) ||
    similarItems.find((prod) => prod.id === id);

  if (!product) {
    return (
      <StyledProductNotFound>
        {' '}
        <Box>
          <Heading as="h1">
            The Product you are looking for could not be found 😢
          </Heading>
          <div>
            <Button onClick={moveBack} size="large">
              &larr; Go back
            </Button>
          </div>
        </Box>
      </StyledProductNotFound>
    );
  }

  const isInCart = cartItems.some((item) => item.id === product.id);

  function handleQuantityChange(newQuantity) {
    setItemNumber(newQuantity);
  }

  function handleAddToCart({ product }) {
    const quantity = itemNumber;

    if (!isInCart) {
      const productWithQuantity = { ...product, quantity };

      addItemToCart(productWithQuantity);

      toast.success(`${productInfoName} Added to Cart 😎.`);
    }
  }

  function handleBuyNow(product) {
    handleAddToCart(product);

    navigate('/cart');
  }

  const {
    id: itemId,
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
    defaultBuyingQuantity,
  } = product;

  // Since the ProductInfo page receives data from different segments; I had to join each parameter together with the "or ||" method.
  const productInfoPrice =
    newArrivalPrice || similarItemsPrice || frequentlyViewedItemsPrice;

  const productInfoName =
    newArrivalName || similarItemsName || frequentlyViewedItemsName;

  const productInfoImage =
    newArrivalImage || similarItemsImage || frequentlyViewedItemsImage;

  const productInfoDiscount =
    newArrivalDiscount || similarItemsDiscount || frequentlyViewedItemsDiscount;

  return (
    <StyledProductInfoContainer>
      <ProductMainInfo>
        <ProductInfoImage>
          <img src={productInfoImage} alt="Product " />
        </ProductInfoImage>

        <Row type="vertical">
          {productInfoDiscount === 0 ? (
            ''
          ) : (
            <ProductDiscountAmount>
              <p className="product-price">Save {productInfoDiscount}%</p>
              <span>Discount applied</span>
            </ProductDiscountAmount>
          )}

          <Heading as="h1">{productInfoName}</Heading>
          <ProductInfoText>
            <h3 className="product-mini_text">
              Premium cotton shirt with a crisp collar and tailored fit, perfect
              for any occasion from office to casual outings.
            </h3>
          </ProductInfoText>

          <ProductPricing>
            <h2 className="product-price">
              <span className="naira-sign">₦</span>{' '}
              {formatNumber(productInfoPrice)}
            </h2>
            {productInfoDiscount === 0 ? (
              ''
            ) : (
              <h2 className="product-slashed_price">
                <span className="naira-sign">₦ </span>
                {formatNumber(
                  (productInfoPrice / 100) * productInfoDiscount +
                    productInfoPrice
                )}
              </h2>
            )}
          </ProductPricing>

          <ProductAvailability>
            <h3 className="product-mini_text">In Stock</h3>
          </ProductAvailability>

          <ProductReviews>
            <div className="reviewRatings">
              <p>⭐⭐⭐⭐⭐</p>
              <p>4.9</p>
            </div>

            <div className="reviewNumbers">
              <p>120 Reviews ~ 23 sold</p>
            </div>
          </ProductReviews>

          <UpdateItemQuantity
            defaultBuyingQuantity={defaultBuyingQuantity}
            itemId={itemId}
            onQuantityChange={handleQuantityChange}
          />

          <ButtonContainer>
            <Button
              variation="secondary"
              size="large"
              onClick={() => handleBuyNow({ product })}
            >
              Buy Now
            </Button>
            {isInCart ? (
              <Button
                variation="primary"
                size="large"
                onClick={() => navigate('/cart')}
              >
                View Cart
              </Button>
            ) : (
              <Button
                variation="primary"
                size="large"
                onClick={() => handleAddToCart({ product })}
              >
                Add to Cart
              </Button>
            )}

            <WishlistContainer>
              <WishlistIcon type={wishlist ? true : ''} />
            </WishlistContainer>
          </ButtonContainer>
        </Row>
      </ProductMainInfo>

      <ProductSubInfo>
        <Heading as="h2">Description</Heading>
        <p>
          Upgrade your wardrobe with our Classic White Button-Down Shirt, a
          timeless piece that blends elegance with comfort. Crafted from
          premium, breathable cotton, this shirt is perfect for both formal and
          casual occasions. The tailored fit ensures a sleek silhouette, while
          the button-down collar adds a touch of sophistication. Whether you're
          dressing up for a meeting or dressing down for a weekend outing, this
          versatile shirt is a must-have staple.
        </p>
        <Heading as="h2">Specificaion</Heading>
        <ul>
          <li>
            <strong>Type: </strong>Polo
          </li>
          <li>
            <strong>Gender: </strong>Unisex
          </li>
          <li>
            <strong>Material: </strong>100% Cotton
          </li>
          <li>
            <strong>Colour: </strong>Brown
          </li>
          <li>
            <strong>Fit: </strong>Regular Fit
          </li>
          <li>
            <strong>Sizes Available: </strong> S, M, L, XL, XXL
          </li>
          <li>
            <strong>Brand: </strong>Fendi
          </li>
          <li>
            <strong>Instructions: </strong> Machine wash cold, tumble dry low
          </li>
        </ul>
      </ProductSubInfo>

      <SimilarItems />
      <FrequentlyViewed />

      <Benefits />
    </StyledProductInfoContainer>
  );
}

export default ProductInfo;
