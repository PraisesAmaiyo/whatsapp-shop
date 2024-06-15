import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import { StyleSheetManager } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'variation'}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Homepage />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </StyleSheetManager>
      </BrowserRouter>
    </>
  );
}

export default App;
