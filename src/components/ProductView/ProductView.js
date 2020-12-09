import React, { useEffect } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css';
import { useState } from 'react';

function ProductView({ products }) {
    const [sideOpen, setSideOpen] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState('');

    useEffect(() => {
        if (selectedProduct) setSideOpen(true);
    }, [selectedProduct]);

    useEffect(() => {
        if (!sideOpen) setSelectedProduct();
    }, [sideOpen])

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => setSelectedProduct(item)}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails product={selectedProduct} visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
