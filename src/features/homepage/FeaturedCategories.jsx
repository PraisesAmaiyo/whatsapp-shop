import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';

import { featuredCategories } from './store';

const StyledFeaturedCategories = styled.section`
  padding: 4rem 0;
`;

const FeaturedCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 1.5rem;
`;

const FeaturedCategory = styled.div`
  margin: 0 auto;
  width: 15rem;
  text-align: center;

  div {
    border-radius: var(--border-radius-round);
    padding: 2rem;
    background-color: var(--color-grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 1.2rem;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

function FeaturedCategories() {
  return (
    <StyledFeaturedCategories>
      <Row type="vertical">
        <Heading as="h1">Featured Categories</Heading>

        <FeaturedCategoriesContainer>
          {featuredCategories.map((featuredCategory, index) => {
            const {
              id,
              featuredCategoryImage,
              featuredCategoryName,
              featuredCategoryQuantity,
            } = featuredCategory;
            return (
              <FeaturedCategory key={id}>
                <>
                  <div>
                    <ProductImage
                      src={featuredCategoryImage}
                      alt={`Category ${index}`}
                    />
                  </div>
                  <Heading as="h4">{featuredCategoryName}</Heading>
                  <span>{featuredCategoryQuantity}</span>
                </>
              </FeaturedCategory>
            );
          })}
        </FeaturedCategoriesContainer>
      </Row>
    </StyledFeaturedCategories>
  );
}

export default FeaturedCategories;
