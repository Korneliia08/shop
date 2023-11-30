import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import DefaultComponents from "./components/MainPage/DefaultComponents";
import DisplayProducts from "./components/ChooseCategory/CurrentCategory/DisplayProducts/DisplayProducts";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import InformationOfProduct from "./components/ChooseCategory/CurrentCategory/DisplayProducts/Product/InformationOfProduct/InformationOfProduct";
import CartPage from "./components/CartPage/CartPage";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const [open, setOpen] = useState(false);
  const [productCart, setProductCart] = useState([]);

  function addProduct(product) {
    const idOfProduct = product.id;
    const index = productCart.findIndex((product) => {
      return product.id === idOfProduct;
    });
    if (index > -1) {
      return;
    }
    setProductCart([...productCart, product]);
  }

  function deleteProduct(id) {
    const products = productCart.filter((product) => product.id !== id);
    setProductCart(products);
  }

  function changeProduct(product, idOfProduct) {
    const index = productCart.findIndex((product) => {
      return product.id === idOfProduct;
    });
    const productCartCopy = [...productCart];
    productCartCopy[index] = product;

    setProductCart(productCartCopy);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainPage
          open={open}
          setOpen={setOpen}
          productCart={productCart}
          deleteProduct={deleteProduct}
        />
      ),
      children: [
        {
          path: "/",
          element: <DefaultComponents />,
        },
        {
          path: "/category/:nameCategory",
          element: <DisplayProducts />,
        },
        {
          path: "/product/:id",
          element: (
            <InformationOfProduct setOpen={setOpen} addProduct={addProduct} />
          ),
        },
        {
          path: "/cart",
          element: (
            <CartPage
              deleteProduct={deleteProduct}
              data={productCart}
              changeProduct={changeProduct}
            />
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to={"/"}></Navigate>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
