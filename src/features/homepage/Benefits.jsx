import {
  AiOutlineCustomerService,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

import { FiRefreshCw } from 'react-icons/fi';

import { MdOutlineLocalShipping } from 'react-icons/md';
import styled from 'styled-components';

const BenefitsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .background {
    position: absolute;
    width: 4rem;
    height: 4rem;
    background-color: var(--color-brand-200);
    border-radius: 50%;
    transform: translate(-20%, 0%);
  }

  & svg {
    font-size: 4rem;
    background-color: var(--color-gold-400);
    border-radius: 50%;
    padding: 1rem;
    color: var(--color-brand-800);
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;

    span {
      font-size: 2.5rem;
      font-weight: 500;
    }
  }
`;

function Benefits() {
  return (
    <BenefitsContainer>
      <BenefitCard>
        <MdOutlineLocalShipping />
        <div className="background" />
        <span>
          Fast <br /> Shipping
        </span>
      </BenefitCard>

      <BenefitCard>
        <AiOutlineShoppingCart />
        <div className="background" />
        <span>
          Easy <br /> to Shop
        </span>
      </BenefitCard>

      <BenefitCard>
        <AiOutlineCustomerService />
        <div className="background" />
        <span>
          24/7 <br /> Support
        </span>
      </BenefitCard>

      <BenefitCard>
        <FiRefreshCw />
        <div className="background" />
        <span>
          Hassle-Free <br /> Returns
        </span>
      </BenefitCard>
    </BenefitsContainer>
  );
}

export default Benefits;
