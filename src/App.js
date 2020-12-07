import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Header,
  Products,
  ProductDetails,
  ProductList,
} from "./components";
import { dataContext } from "./DataContext";

function App() {
  const dataState = {
    "blazer-mid-77-infinite-shoe": {
      name: "Nike Blazer",
      img:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9024868d-598b-48bf-8605-1a49df79a725/blazer-mid-77-infinite-shoe-dCp5Mm.jpg",
      price: 100,
    },
    "zoom-freak-2-naija-basketball-shoe": {
      name: "Zoom Freak 2 Naija",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aec8be5c-9447-42d7-bea8-e24ce7f187e0/zoom-freak-2-naija-basketball-shoe-38bV3Q.jpg",
      price: 120,
    },
    "air-zoom-superrep-hiit-class-shoe": {
      name: "Nike Air Zoom SuperRep",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-52663678-3628-48f3-ad8d-39d4d8ee1bd7/air-zoom-superrep-hiit-class-shoe-4VjdKB.jpg",
      price: 90,
    },
  };

  const NotFound = () => {
    return (
      <div>
        <h4>Oops! Page not found.</h4>
      </div>
    );
  };

  return (
    <div>
      <dataContext.Provider value={dataState}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path=":productID" element={<ProductDetails />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </dataContext.Provider>
    </div>
  );
}

export default App;
