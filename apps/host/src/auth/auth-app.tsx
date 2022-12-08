import { loadComponent } from '../mfe-utils/load-remote-component';

import React, { useRef, useEffect } from 'react';

const Auth = loadComponent('auth', 'default', './AuthApp', 'http://localhost:8082/remoteEntry.js');

export default () => {
  const ref = useRef(null);

  useEffect(() => {

    async function mountAuth() {
        const { mount } = await Auth();
        mount(ref.current, {
            initialPath: window.location.pathname,
        });
    }
    mountAuth();

  }, []);

  return <div ref={ref} />;
};
