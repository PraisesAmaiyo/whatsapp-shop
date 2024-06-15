import { HiOutlineUser } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';
import { FiHeart, FiSearch, FiShoppingCart } from 'react-icons/fi';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function Headermenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/')}>
          <HiOutlineUser />
        </ButtonIcon>

        <ButtonIcon onClick={() => navigate('/')}>
          <FiShoppingCart />
        </ButtonIcon>

        <ButtonIcon onClick={() => navigate('/')}>
          <FiHeart />
        </ButtonIcon>

        <ButtonIcon onClick={() => navigate('/')}>
          <FiSearch />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default Headermenu;
