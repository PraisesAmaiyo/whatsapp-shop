import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';

import featuredCategoryImage1 from '../../assets/images/categories-1.png';
import featuredCategoryImage2 from '../../assets/images/categories-2.png';
import featuredCategoryImage3 from '../../assets/images/categories-3.png';
import featuredCategoryImage4 from '../../assets/images/categories-4.png';
import featuredCategoryImage6 from '../../assets/images/categories-7.png';
import featuredCategoryImage7 from '../../assets/images/categories-8.png';
import featuredCategoryImage8 from '../../assets/images/categories-9.png';
import featuredCategoryImage9 from '../../assets/images/categories-11.png';

const StyledFeaturedCategories = styled.section`
  padding: 4rem 0;
`;

const FeaturedCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const FeaturedCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 15rem;

  div {
    border-radius: var(--border-radius-round);
    padding: 2rem;
    background-color: var(--color-gold-50);
    display: flex; /* Ensure flexbox is used */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
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
          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage1} alt="Category one" />
            </div>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage2} alt="Category two" />
            </div>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage3} alt="Category three" />
            </div>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage4} alt="Category four" />
            </div>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage6} alt="Category six" />
            </div>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage7} alt="Category seven" />
            </div>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage8} alt="Category eight" />
            </div>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage9} alt="Category nine" />
            </div>
          </FeaturedCategory>
        </FeaturedCategoriesContainer>
      </Row>
    </StyledFeaturedCategories>
  );
}

export default FeaturedCategories;
