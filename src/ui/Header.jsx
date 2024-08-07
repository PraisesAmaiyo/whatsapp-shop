import HeaderNav from './HeaderNav';
import HeaderMenu from './HeaderMenu';

import Logo from './Logo';
import Row from './Row';

function Header() {
  return (
    <Row type="horizontal">
      <Logo />
      <HeaderNav />
      <HeaderMenu />
    </Row>
  );
}

export default Header;
