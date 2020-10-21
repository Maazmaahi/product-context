import React from 'react';
import { Header } from './Header';
import {ProductList} from "./productList/ProductList";

export const Home = () => {
    return (
        <div>
            <Header />
            <ProductList />
        </div>
    )
}
