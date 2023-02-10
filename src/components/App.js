import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "../context/CartContext";
import CheckoutProvider from "../context/CheckoutContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Header />
        <CheckoutProvider>
          <Main />
        </CheckoutProvider>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
