import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';

import recommendedImage5 from '../../assets/images/recommended-img-5.png';
import recommendedImage2 from '../../assets/images/recommended-img-2.png';
import recommendedImage4 from '../../assets/images/recommended-img-4.png';

const StyledFeaturedCategories = styled.section`
  padding: 4rem 0;
`;

const FeaturedCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const FeaturedCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* img {
    height: 20rem;
    width: 20rem;
    background-color: var(--color-gold-50);
    padding: 5rem;
  } */

  span {
    font-size: 1.2rem;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  /* object-fit: cover;
  object-position: center; */
  background-color: var(--color-gold-50);
  border-radius: var(--border-radius-round);
  padding: 5rem;
`;

function FeaturedCategories() {
  return (
    <StyledFeaturedCategories>
      <Row type="vertical">
        <Heading as="h1">Featured Categories</Heading>

        <FeaturedCategoriesContainer>
          <FeaturedCategory>
            <ProductImage src={recommendedImage2} alt="Category one" />
          </FeaturedCategory>
        </FeaturedCategoriesContainer>
      </Row>
    </StyledFeaturedCategories>
  );
}

export default FeaturedCategories;
