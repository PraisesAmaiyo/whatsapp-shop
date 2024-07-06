import styled from 'styled-components';
import ProductImage from '../../assets/images/newArrivals/newArrivals-1.jpg';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';

const StyledProductInfoContainer = styled.section`
  padding: 4rem 0;
`;

const ProductMainInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
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
  padding: 1.5rem;
  border-radius: var(--border-radius-lg);
  color: var(--color-brand-950);
  font-size: 2rem;
  font-weight: 600;

  span {
    font-size: 1.3rem;
  }
`;

const ProductInfoText = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

function ProductInfo() {
  return (
    <StyledProductInfoContainer>
      <ProductMainInfo>
        <ProductInfoImage>
          <img src={ProductImage} alt="Product " />
        </ProductInfoImage>

        <ProductInfoTextContainer>
          <Row type="vertical">
            <ProductDiscountAmount>
              <p>Save 24,000</p>
              <span>Discount applied</span>
            </ProductDiscountAmount>

            <ProductInfoText>
              <Heading as="h1">Brown Collar Shirt</Heading>
              <h3>
                Premium cotton shirt with a crisp collar and tailored fit,
                perfect for any occasion from office to casual outings.
              </h3>
              <Heading as="h2">25,000</Heading>
            </ProductInfoText>
          </Row>
        </ProductInfoTextContainer>
      </ProductMainInfo>
    </StyledProductInfoContainer>
  );
}

export default ProductInfo;
