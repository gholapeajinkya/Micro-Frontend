interface MyProductsProps {
  products?: any[];
}


declare module 'remoteApp/MyProducts' {
  const MyProducts: React.ComponentType<MyProductsProps>;
  export default MyProducts;
}

declare module 'remoteApp/Login' {
  const Login: React.ComponentType<Login>;
  export default Login;
}
declare module 'remoteApp/SignUp' {
  const SignUp: React.ComponentType<SignUp>;
  export default SignUp;
}
