import styled from 'styled-components';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const StyledWishlistIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--color-brand-100);
  border: none;
  padding: 0.4rem;
  border-radius: 100px;
  transition: all 0.2s;
  box-shadow: var(--shadow-lg);
  z-index: 100;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    transition: all 0.3s;
  }

  .heart-outline {
    color: var(--color-brand-900);
  }

  .heart-full {
    color: var(--color-red-700);
  }
`;

function WishlistIcon({ type }) {
  return (
    <StyledWishlistIcon>
      {type === 'wishlisted' ? (
        <GoHeartFill className="heart-full" />
      ) : (
        <GoHeart className="heart-outline" />
      )}
    </StyledWishlistIcon>
  );
}

export default WishlistIcon;
