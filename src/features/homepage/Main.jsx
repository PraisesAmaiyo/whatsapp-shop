import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

import Tag from '../../ui/Tag';
import Row from '../../ui/Row';

import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import MainSwiper from './MainSwiper';

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 90vh;
  gap: 2rem;
  padding: 5rem 0;
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainSummary = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }
  h4 {
    font-size: 2rem;
    font-weight: 500;
  }
  h5 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1; /* Push MainSummary to the bottom */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainRight = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 2rem 0 2rem;
  display: flex;
`;

const ButtonDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

function Main() {
  return (
    <>
      <Row type="vertical">
        <StyledMain>
          <MainLeft>
            <ContentWrapper>
              <Tag>Wear Your Confidence</Tag>

              <Heading as="h1">Your Stylish and Affordable Destination</Heading>

              <Heading as="h3">
                Discover trendy looks that fit your budget! We've got the latest
                styles and everyday essentials, all at prices that make shopping
                fun and guilt-free.
              </Heading>

              <ButtonDiv>
                <Button variation="primary" size="medium">
                  Shop Now
                  <HiOutlineArrowCircleRight />
                </Button>

                <Button variation="text" underline="underline" size="medium">
                  Follow Instagram
                </Button>
              </ButtonDiv>
            </ContentWrapper>

            <MainSummary>
              <div>
                <h4>50+</h4>
                <h5>Unique Fashion Styles</h5>
              </div>

              <div>
                <h4>250+</h4>
                <h5>Happy Customers</h5>
              </div>

              <div>
                <h4>1000+</h4>
                <h5>Trusted Partners</h5>
              </div>
            </MainSummary>
          </MainLeft>

          <MainRight>
            <MainSwiper />
          </MainRight>
          {/* 
          <MainRight>
            <img src={headerImage} alt="Happy shopping girl" />
          </MainRight> */}
        </StyledMain>
      </Row>
    </>
  );
}

export default Main;
