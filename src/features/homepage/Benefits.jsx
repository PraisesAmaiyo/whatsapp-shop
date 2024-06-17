import {
  FaHeadset,
  FaShippingFast,
  FaShoppingCart,
  FaUndo,
} from 'react-icons/fa';
import styled from 'styled-components';

const BenefitsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120rem;
  padding: 1.2rem 4.8rem;
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;

  & svg {
    font-size: 4rem;
    background-color: var(--color-gold-400);
    border-radius: 50%;
    padding: 1rem;
    color: var(--color-brand-800);
    margin-bottom: 1rem;
  }

  span {
    font-size: 2rem;
  }
`;

function Benefits() {
  return (
    <BenefitsContainer>
      <BenefitCard>
        <FaShippingFast />
        <span>Fast Shipping</span>
      </BenefitCard>

      <BenefitCard>
        <FaShoppingCart />
        <span>Easy to Shop</span>
      </BenefitCard>

      <BenefitCard>
        <FaHeadset />
        <span>24/7 Support</span>
      </BenefitCard>

      <BenefitCard>
        <FaUndo />
        <span>Hassle-Free Returns</span>
      </BenefitCard>
    </BenefitsContainer>
  );
}

export default Benefits;
