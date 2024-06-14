import { Outlet } from 'react-router-dom';

function homepage() {
  return (
    <>
      <div>Hello World</div>
      <Outlet />
    </>
  );
}

export default homepage;
