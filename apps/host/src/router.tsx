import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { worker } from './mocks/browser';

import App from './app/app';
import DeferComponent, { loader as DeferredLoader } from "./defer/defer-component";

import Cart from './routes/cart';
import Shop from './routes/shop';
import About from './routes/about';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    // serviceWorker:{
    //   url: '/assets/mockServiceWorker.js',
    //   // options: {
    //   //   scope: '/'
    //   // }
    // },
    onUnhandledRequest: 'warn',
  }).catch(e => console.log(e))
}

const Auth = React.lazy(() => import('./auth/auth-app'));

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      }, 
      {
        path: "about",
        element: <About />,
      }, 
      {
        path: "shop",
        element: <Shop />,
        // loader
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "auth/*",
        element: <React.Suspense fallback="loading auth... "><Auth /></React.Suspense>,
      },
      {
        path: "defer-example",
        element: <DeferComponent />,
        loader: DeferredLoader
      },
    ]
    // loader
  },
]);

