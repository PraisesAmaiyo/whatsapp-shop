import styled from 'styled-components';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const StyledWishlistIcon = styled.button`
  border: none;

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
      {type === true ? (
        <GoHeartFill className="heart-full" />
      ) : (
        <GoHeart className="heart-outline" />
      )}
    </StyledWishlistIcon>
  );
}

export default WishlistIcon;
