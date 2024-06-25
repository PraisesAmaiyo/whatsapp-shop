import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';

import headerImage from '../../assets/images/header-image.jpeg';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AccordionList = styled.ul`
  display: flex;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  transition: 0.3s;
  width: 100%;
`;

const AccordionItem = styled.li`
  position: relative;
  overflow: hidden;
  flex: ${({ active }) => (active ? '0 1 35rem' : '0 0 8rem')};
  border-radius: var(--border-radius-lg);
  opacity: ${({ active }) => (active ? 1 : 0.75)};
  cursor: pointer;
  transition: 0.3s;
  z-index: ${({ active }) => (active ? 10 : 1)};
  transform: ${({ active }) => (active ? 'scale(1.1)' : 'scale(1)')};

  &.active {
    flex: 0 1 35rem;
    z-index: 10;
    opacity: 1;

    img {
      filter: none;
    }

    .content {
      opacity: 1;
      visibility: visible;
    }

    .content span {
      translate: -50% 0;
      opacity: 1;
      visibility: visible;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.5);
    transition: 0.3s;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    color: #fff;
    padding: 1.5rem;
    background: linear-gradient(
      0deg,
      rgb(0 0 0 / 70%) 5%,
      rgb(255 255 255 / 0%) 100%
    );

    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transition: 0.3s;
  }

  .content span {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 5rem;
    transform: translate(-50%, 0);
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: 0.3s;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`;

function MainSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      img: headerImage,
      title: 'Male Clothings',
      description: 'Unique Designers',
    },
    {
      img: headerImage,
      title: 'Smart Baddies',
      description: 'Slick Wears',
    },
    {
      img: headerImage,
      title: 'Sharp Kicks',
      description: 'Rock Your Swag',
    },
    {
      img: headerImage,
      title: 'Classy Wears',
      description: 'Premium or Nothing',
    },
  ];

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <AccordionContainer>
      <AccordionList className="accordion">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            className={index === activeIndex ? 'active' : ''}
          >
            <img src={item.img} alt={item.title} />
            <div className="content">
              <span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </span>
            </div>
          </AccordionItem>
        ))}
      </AccordionList>
      <ButtonContainer>
        <Button variation="outline" size="large" onClick={prevItem}>
          <FaArrowLeft />
        </Button>
        <Button variation="primary" size="large" onClick={nextItem}>
          <FaArrowRight />
        </Button>
      </ButtonContainer>
    </AccordionContainer>
  );
}

export default MainSwiper;
