import styled from 'styled-components';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

import Tag from '../../ui/Tag';

import recommendedImage5 from '../../assets/images/recommended-img-5.png';
import recommendedImage2 from '../../assets/images/recommended-img-2.png';
import recommendedImage4 from '../../assets/images/recommended-img-4.png';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto auto;
  gap: 2rem;
  padding: 4rem 0;
`;

const ProductCard = styled.div`
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-lg);
  transition: transform 0.2s;
`;

const LeftCard = styled(ProductCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
`;

const RightCard = styled(ProductCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
`;

const FullWidthCardLeftTop = styled(ProductCard)`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: min-content;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  img {
    grid-column: 2/3;
    grid-row: 1/-1;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
  div.recommended-cta {
    grid-column: 1/2;
    grid-row: 1/-1;
    padding: 2rem 0 2rem 2rem;
  }
  ul {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;

const FullWidthCardLeftBottom = styled(ProductCard)`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  span {
    margin-bottom: 0.5rem;
  }

  img {
    grid-column: 2/3;
    grid-row: 1/-1;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
  div.recommended-cta {
    grid-column: 1/2;
    grid-row: 1/-1;
    padding: 2rem 0 2rem 2rem;
  }
  ul {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;

const FullWidthCardRight = styled(ProductCard)`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, min-content);
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 2rem;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  span {
    margin-bottom: 0.5rem;
  }

  img {
    grid-row: 2/3;
    width: 55%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    margin: 0 auto;
  }
  div.recommended-cta {
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 0.2rem 2rem;
    margin-bottom: 1rem;
    text-align: left;
  }
`;

const HalfWidthCardLeft = styled(ProductCard)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, min-content);
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 2rem;

  span {
    margin-bottom: 0.5rem;
  }

  img {
    /* grid-row: 2/3; */
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
  div.recommended-cta {
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 0.2rem 2rem;
    margin-bottom: 1rem;
    text-align: left;
  }
`;

const HalfWidthCardRight = styled(ProductCard)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, min-content);
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 2rem;

  span {
    margin-bottom: 0.5rem;
  }

  img {
    /* grid-row: 2/3; */
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
  div.recommended-cta {
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 0.2rem 2rem;
    margin-bottom: 1rem;
    text-align: left;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const RecommendedProducts = () => {
  return (
    <ProductGrid>
      <LeftCard>
        <FullWidthCardLeftTop>
          <div className="recommended-cta">
            <Tag type="dark">Recommended</Tag>

            <Heading as="h2">Leather Shoes</Heading>

            <ul>
              <li>Strong leather</li>
              <li>Durable</li>
              <li>Great sole</li>
              <li>Comfortable fit</li>
            </ul>

            <Button variation="textDark" size="medium">
              View All <HiOutlineArrowCircleRight />
            </Button>
          </div>
          <ProductImage
            src={recommendedImage5}
            alt="Leather male corporate shoe"
          />
        </FullWidthCardLeftTop>

        <FullWidthCardLeftBottom>
          <ProductImage src={recommendedImage2} alt="Male round necck polo" />
          <div className="recommended-cta">
            <Tag type="dark">Recommended</Tag>

            <Heading as="h2">Round Neck Polo</Heading>

            <ul>
              <li>Soft fabric</li>
              <li>Breathable</li>
              <li>Vibrant Colours</li>
              <li>Easy care</li>
            </ul>

            <Button variation="textDark" size="medium">
              View All <HiOutlineArrowCircleRight />
            </Button>
          </div>
        </FullWidthCardLeftBottom>

        {/* <HalfWidthCardLeft>
            <Tag type="dark">Recommended</Tag>
            <ProductImage src={recommendedImage3} alt="Vintage shirts" />
            <div className="recommended-cta">
              <Heading as="h2">Vintage Shirts</Heading>

              <ul>
                <li>Unique design</li>
                <li>High-quality</li>
                <li>Comfortable fit</li>
                <li>Timeless style</li>
              </ul>

              <Button variation="textDark" size="medium">
                View All <HiOutlineArrowCircleRight />
              </Button>
            </div>
          </HalfWidthCardLeft>

          <HalfWidthCardRight>
            <Tag type="dark">Recommended</Tag>
            <ProductImage
              src={recommendedImage2}
              alt="Leather male corporate shoe"
            />
            <div className="recommended-cta">
              <Heading as="h2">Round Neck Polo</Heading>

              <ul>
                <li>Soft fabric</li>
                <li>Breathable</li>
                <li>Vibrant Colours</li>
                <li>Easy care</li>
              </ul>

              <Button variation="textDark" size="medium">
                View All <HiOutlineArrowCircleRight />
              </Button>
            </div>
          </HalfWidthCardRight> */}
      </LeftCard>

      <RightCard>
        <FullWidthCardRight>
          <Tag type="dark">Recommended</Tag>
          <ProductImage
            src={recommendedImage4}
            alt="Male wearing a matcehd shirt and short"
          />
          <div className="recommended-cta">
            <Heading as="h2">Shirts and Shorts</Heading>

            <ul>
              <li>Unique design</li>
              <li>High-quality</li>
              <li>Comfortable fit</li>
              <li>Timeless style</li>
            </ul>

            <Button variation="textDark" size="medium">
              View All <HiOutlineArrowCircleRight />
            </Button>
          </div>
        </FullWidthCardRight>
      </RightCard>
    </ProductGrid>
  );
};

export default RecommendedProducts;
