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
      {loading && <div>Loading...</div>}
      {products.map((product: any) => (
        <div className="product-card" key={`${product.id}`}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h3>{product.title}</h3>
            <p className="product-details-description">{product.description}</p>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
