interface MyProductsProps {
  products?: any[];
}

interface LoginProps {
  onLogin?: (username: string, password: string) => void;
  onSwitchToSignUp?: () => void;
  goToHome?: () => void;
}


interface SignUpProps {
  onSignUp?: (username: string, email: string, password: string) => void;
  onSwitchToLogin?: () => void;
  goToHome?: () => void;
}

interface LandingProps {
  onLogin?: () => void;
  onBrowser?: (category: string) => void;
}

declare module 'remoteApp/MyProducts' {
  const MyProducts: React.ComponentType<MyProductsProps>;
  export default MyProducts;
}

declare module 'remoteApp/Login' {
  const Login: React.ComponentType<LoginProps>;
  export default Login;
}
declare module 'remoteApp/Signup' {
  const Signup: React.ComponentType<SignUpProps>;
  export default Signup;
}

declare module 'remoteApp/Landing' {
  const Landing: React.ComponentType<LandingProps>;
  export default Landing;
}
