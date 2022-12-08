import React from 'react';
const Shop = React.lazy(() => import('shop/Module'));

export default function ShopPage() { 
    return (
        <React.Suspense fallback="Loading Shop">
        <Shop />
        </React.Suspense>
    );
}