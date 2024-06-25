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
          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage1} alt="Category one" />
            </div>
            <Heading as="h4">Leather Shoes</Heading>
            <span>Discover 120 Products</span>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage2} alt="Category two" />
            </div>
            <Heading as="h4">Corduroy Jackets</Heading>
            <span>Discover 85 Products</span>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage3} alt="Category three" />
            </div>
            <Heading as="h4">Sweat Shirts</Heading>
            <span>Discover 49 Products</span>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage4} alt="Category four" />
            </div>
            <Heading as="h4">Hoodies</Heading>
            <span>Discover 110 Products</span>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage6} alt="Category six" />
            </div>
            <Heading as="h4">T-shirts/Polos</Heading>
            <span>Discover 260 Products</span>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage7} alt="Category seven" />
            </div>
            <Heading as="h4">Sneakers</Heading>
            <span>Discover 118 products</span>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage8} alt="Category eight" />
            </div>
            <Heading as="h4">Leather Bags</Heading>
            <span>Discover 37 Products</span>
          </FeaturedCategory>

          <FeaturedCategory>
            <div>
              <ProductImage src={featuredCategoryImage9} alt="Category nine" />
            </div>
            <Heading as="h4">Designer Jeans</Heading>
            <span>Discover 194 Products</span>
          </FeaturedCategory>
        </FeaturedCategoriesContainer>
      </Row>
    </StyledFeaturedCategories>
  );
}

export default FeaturedCategories;
