import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Button from '../../ui/Button';

import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

import TrendingProductImage1 from '../../assets/images/trendingProducts/trending-1.jpg';
import TrendingProductImage2 from '../../assets/images/trendingProducts/trending-2.jpg';
import TrendingProductImage3 from '../../assets/images/trendingProducts/trending-3.jpg';
import TrendingProductImage4 from '../../assets/images/trendingProducts/trending-4.jpg';
import TrendingProductImage5 from '../../assets/images/trendingProducts/trending-5.jpg';
import TrendingProductImage6 from '../../assets/images/trendingProducts/trending-6.jpg';
import TrendingProductImage7 from '../../assets/images/trendingProducts/trending-7.jpg';
import TrendingProductImage8 from '../../assets/images/trendingProducts/trending-8.jpg';

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

  span {
    font-size: 1.2rem;
  }
`;

const TrendingImageContainer = styled.div`
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
  }

  & div svg {
    font-size: 4rem;
    background-color: var(--color-grey-0);
    border-radius: 50%;
    padding: 1rem;
    color: var(--color-gold-500);
    position: relative;
    z-index: 1;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      outline: 1.5px solid var(--color-gold-600);
      color: var(--color-gold-600);
    }
  }
`;

function TrendingProducts() {
  return (
    <StyledTrendingProducts>
      <Row type="vertical">
        <TrendingProductHeader>
          <Heading as="h1">
            Trending products <br /> for you!
          </Heading>

          <Button variation="primary" size="large">
            View all products <FaArrowRight />
          </Button>
        </TrendingProductHeader>

        <TrendingProductsContainer>
          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage1} alt="Category one" />
            </TrendingImageContainer>
            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
                {/* <Heading as="h4">₦255,000</Heading> */}
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>

          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage2} alt="Category two" />
            </TrendingImageContainer>

            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>

          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage3} alt="Category one" />
            </TrendingImageContainer>

            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>

          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage4} alt="Category two" />
            </TrendingImageContainer>

            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>

          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage5} alt="Category two" />
            </TrendingImageContainer>

            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>

          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage6} alt="Category two" />
            </TrendingImageContainer>

            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>

          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage7} alt="Category two" />
            </TrendingImageContainer>

            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>

          <TrendingProduct>
            <TrendingImageContainer>
              <ProductImage src={TrendingProductImage8} alt="Category two" />
            </TrendingImageContainer>

            <TrendingCategoryActions>
              <div>
                <Heading as="h4">Leather Shoes</Heading>
                <span>₦255,000</span>
              </div>

              <div>
                <FaShoppingCart />
              </div>
            </TrendingCategoryActions>
          </TrendingProduct>
        </TrendingProductsContainer>
      </Row>
    </StyledTrendingProducts>
  );
}

export default TrendingProducts;
