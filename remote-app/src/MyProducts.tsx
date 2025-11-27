import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

interface MyProductsProps {
  products?: any[];
}

const MyProducts = (props: MyProductsProps) => {
  const [products, setProducts] = useState(props.products ?? []);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="products-container">
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      )}
      {!loading && products.map((product: any, index: any) => (
        <div 
          className="product-card" 
          key={`${product.id}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="product-price">${product.price.toFixed(2)}</span>
              <div className="product-rating">
                <span className="stars">⭐</span>
                <span className="rating-value">{product.rating?.rate || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
