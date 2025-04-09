interface MyProductsProps {
  products?: any[];
}


declare module 'remoteApp/MyProducts' {
  const MyProducts: React.ComponentType<MyProductsProps>;
  export default MyProducts;
}
