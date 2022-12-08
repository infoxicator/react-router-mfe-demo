/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Outline } from '@react-router-mfe/shared-ui';

import Header from '../components/header';

type CustomNavigationEvent = {
  detail: { nextPathname:string }
}
export function App() {

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(
      '[host] navigated', {
      detail: {
        pathname: location.pathname
      }
    }))
  }, [location]);

  React.useEffect(() => {
    const authNavigationHandler = ({ detail }: CustomNavigationEvent) => {
      const { nextPathname } = detail ;
      const { pathname } = window.location;
      if (nextPathname !== pathname) {
        navigate(nextPathname);
      }

    }
    // @ts-ignore
    window.addEventListener('[auth] navigated', authNavigationHandler)
    return () => { 
      // @ts-ignore
      window.removeEventListener('[auth] navigated', authNavigationHandler)
    }
  }, []); 

  return (
    <Outline name="host" color="red">
      <React.Suspense fallback={null}>
        <Header />
        <Outlet />
      </React.Suspense>
    </Outline>
  );
}

export default App;
