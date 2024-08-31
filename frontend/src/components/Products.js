import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Products</h2>
            <ul className="list-group">
                {products.map(product => (
                    <li key={product.ID_PRODUK} className="list-group-item">
                        {product.NAMA_PRODUK} - Rp.{product.HARGA_JUAL}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
