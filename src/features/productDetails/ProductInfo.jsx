import styled from 'styled-components';
import ProductImage from '../../assets/images/newArrivals/newArrivals-1.jpg';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import UpdateItemQuantity from './UpdateItemQuantity';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import WishlistIcon from '../../ui/WishlistIcon';

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

const ProductInfoTextContainer = styled.div`
  height: 50rem;
  width: 100%;
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
  margin-bottom: 2rem;

  span {
    font-size: 1.3rem;
  }
`;

const ProductInfoText = styled.div`
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ProductPricing = styled.div`
  display: flex;
  gap: 2rem;
  margin: 4rem 0 1.5rem 0;
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

function ProductInfo() {
  return (
    <StyledProductInfoContainer>
      <ProductMainInfo>
        <ProductInfoImage>
          <img src={ProductImage} alt="Product " />
        </ProductInfoImage>

        <Row type="vertical">
          {/* <ProductInfoTextContainer> */}
          <ProductDiscountAmount>
            <p className="product-price">Save 24,000</p>
            <span>Discount applied</span>
          </ProductDiscountAmount>

          <Heading as="h1">Brown Collar Shirt</Heading>
          <ProductInfoText>
            <h3 className="product-mini_text">
              Premium cotton shirt with a crisp collar and tailored fit, perfect
              for any occasion from office to casual outings.
            </h3>
          </ProductInfoText>

          <ProductPricing>
            <h2 className="product-price">₦25,000</h2>
            <h2 className="product-slashed_price">₦2,500</h2>
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

          <UpdateItemQuantity />

          <ButtonContainer>
            <Button variation="secondary" size="large">
              Buy Now
            </Button>
            <Button variation="primary" size="large">
              Add to Cart
            </Button>

            <WishlistContainer>
              <WishlistIcon />
            </WishlistContainer>
          </ButtonContainer>
          {/* </ProductInfoTextContainer> */}
        </Row>
      </ProductMainInfo>
    </StyledProductInfoContainer>
  );
}

export default ProductInfo;
