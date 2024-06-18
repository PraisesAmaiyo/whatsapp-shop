import styled from 'styled-components';
import headerImage from '../../assets/images/header-image.jpeg';

const FeaturedProductsContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
`;

const ProductCard = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const LeftCard = styled(ProductCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
`;

const RightCard = styled(ProductCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
`;

const FullWidthCardLeft = styled(ProductCard)`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
const FullWidthCardRight = styled(ProductCard)`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

const HalfWidthCardLeft = styled(ProductCard)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const HalfWidthCardRight = styled(ProductCard)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1rem;

  object-fit: cover;
  object-position: center;
`;

const ProductName = styled.h3`
  font-size: 1.6rem;
  margin: 1rem 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.4rem;
  color: #888;
`;

const AddToCartButton = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FeaturedProducts = () => {
  return (
    <FeaturedProductsContainer>
      <h2>Featured Products</h2>
      <ProductGrid>
        <LeftCard>
          <FullWidthCardLeft>
            <ProductImage src={headerImage} alt="Happy shopping girl" />;
            <ProductName>Product 1</ProductName>
            <ProductPrice>$20</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </FullWidthCardLeft>

          <HalfWidthCardLeft>
            <ProductImage src={headerImage} alt="Happy shopping girl" />;
            <ProductName>Product 2</ProductName>
            <ProductPrice>$25</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </HalfWidthCardLeft>

          <HalfWidthCardRight>
            <ProductImage src={headerImage} alt="Happy shopping girl" />;
            <ProductName>Product 3</ProductName>
            <ProductPrice>$30</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </HalfWidthCardRight>
        </LeftCard>

        <RightCard>
          <FullWidthCardRight>
            <ProductImage src={headerImage} alt="Happy shopping girl" />;
            <ProductName>Product 4</ProductName>
            <ProductPrice>$35</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </FullWidthCardRight>
        </RightCard>
      </ProductGrid>
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
