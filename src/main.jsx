import {App} from "./App";
import ReactDOM from 'react-dom/client'
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthProvider>
       <CartProvider>
         <App />
       </CartProvider>
  </AuthProvider>);