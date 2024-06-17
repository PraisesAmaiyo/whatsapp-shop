import HeaderNav from './HeaderNav';
import HeaderMenu from './HeaderMenu';

import Logo from '../../ui/Logo';
import Row from '../../ui/Row';

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
