import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Header,
  Products,
  ProductDetails,
  ProductList,
  Cart,
} from "./components";
import { dataContext } from "./DataContext";
import { CartProvider } from "./CartContext";

function App() {
  const dataState = {
    "blazer-mid-77-infinite-shoe": {
      name: "Nike Blazer",
      img:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9024868d-598b-48bf-8605-1a49df79a725/blazer-mid-77-infinite-shoe-dCp5Mm.jpg",
      price: 100,
      detail:
        "The Nike Blazer Mid '77 Infinite toughens up the old-school, b-ball icon that has become the go-to of the streets. Durable rubber details on the toe, heel and side let you take it where you want, day in and day out, while the piping and distorted Swoosh logo add a modern touch.",
    },
    "zoom-freak-2-naija-basketball-shoe": {
      name: "Zoom Freak 2 Naija",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aec8be5c-9447-42d7-bea8-e24ce7f187e0/zoom-freak-2-naija-basketball-shoe-38bV3Q.jpg",
      price: 120,
      detail:
        "The Zoom Freak 2 Naija nods to Nigeria—the homeland of Giannis's parents—where football is a uniting force for boundless potential, youthful exuberance and infectious charisma. Giannis's late father, Charles, bonded with his sons through the beautiful game, furthering Giannis's own passion for the sport. This bright-hued homage nods to that connection by dressing the silhouette in the same colours and textures that grace the kits of the Nigerian national team. The result perfectly encapsulates the spirit of Naija: audacious, fast, fun and stylish.",
    },
    "air-zoom-superrep-hiit-class-shoe": {
      name: "Nike Air Zoom SuperRep",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-52663678-3628-48f3-ad8d-39d4d8ee1bd7/air-zoom-superrep-hiit-class-shoe-4VjdKB.jpg",
      price: 90,
      detail:
        "The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, supportive heel to keep you moving and lifting comfortably.",
    },
    "metcon-5-training-shoe": {
      name: "Nike Metcon 5",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9c39ae15-ed42-4cb4-a905-e1bc2c0ae56f/metcon-5-training-shoe-88qprd.jpg",
      price: 130,
      detail:
        "The Nike Metcon 5 is our most tuned Metcon yet. This means specific stability for heavy lifting, traction made for speed and durability where you need it. It even includes a Hyperlift insert that's compatible with all prior versions of the Metcon. Meet your secret weapon for weight-lifting and high-impact training.",
    },
    "custom-nike-alpha-huarache-elite": {
      name: "Nike Alpha Huarache",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5404d9fc-f13f-4125-8609-76a24379d3e5/custom-nike-alpha-huarache-elite-3-low-by-you.jpg",
      price: 150,
      detail:
        "The Nike Alpha Huarache brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forwards.",
    },
    "react-phantom-run-flyknit": {
      name: "Nike React Phantom Run",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f4163568-4ab9-4fed-9170-efee60bebc33/react-phantom-run-flyknit-2-running-shoe-LcSGB7.jpg",
      price: 120,
      detail:
        "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it disappears on your foot. More foam means better cushioning, keeping you comfortable as you run.",
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
      <CartProvider>
        <dataContext.Provider value={dataState}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="products" element={<Products />}>
              <Route path="/" element={<ProductList />}></Route>
              <Route path=":productID" element={<ProductDetails />}></Route>
            </Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </dataContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
