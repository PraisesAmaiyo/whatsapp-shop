import styled from 'styled-components';

import FrequentlyViewed from './FrequentlyViewed';
import ProductInfo from './ProductInfo';
import SimilarItems from './SimilarItems';
import Benefits from '../../ui/Benefits';

function ProductInfoPage() {
  return (
    <>
      <ProductInfo />
      <SimilarItems />
      <FrequentlyViewed />
      <Benefits />
    </>
  );
}

export default ProductInfoPage;
