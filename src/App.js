import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Header,
  Products,
  ProductDetails,
  ProductList,
  Cart,
  Footer,
} from "./components";
import { dataContext } from "./DataContext";
import { CartProvider } from "./CartContext";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";

function App() {
  const dataState = {
    "blazer-mid-77-infinite-shoe": {
      name: "Nike Blazer",
      img: img1,
      price: 100,
      detail:
        "The Nike Blazer Mid '77 Infinite toughens up the old-school, b-ball icon that has become the go-to of the streets. Durable rubber details on the toe, heel and side let you take it where you want, day in and day out, while the piping and distorted Swoosh logo add a modern touch.",
    },
    "zoom-freak-2-naija-basketball-shoe": {
      name: "Zoom Freak 2 Naija",
      img: img2,
      price: 120,
      detail:
        "The Zoom Freak 2 Naija nods to Nigeria—the homeland of Giannis's parents—where football is a uniting force for boundless potential, youthful exuberance and infectious charisma. Giannis's late father, Charles, bonded with his sons through the beautiful game, furthering Giannis's own passion for the sport. This bright-hued homage nods to that connection by dressing the silhouette in the same colours and textures that grace the kits of the Nigerian national team. The result perfectly encapsulates the spirit of Naija: audacious, fast, fun and stylish.",
    },
    "air-zoom-superrep-hiit-class-shoe": {
      name: "Nike Air Zoom SuperRep",
      img: img3,
      price: 90,
      detail:
        "The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, supportive heel to keep you moving and lifting comfortably.",
    },
    "metcon-5-training-shoe": {
      name: "Nike Metcon 5",
      img: img4,
      price: 130,
      detail:
        "The Nike Metcon 5 is our most tuned Metcon yet. This means specific stability for heavy lifting, traction made for speed and durability where you need it. It even includes a Hyperlift insert that's compatible with all prior versions of the Metcon. Meet your secret weapon for weight-lifting and high-impact training.",
    },
    "custom-nike-alpha-huarache-elite": {
      name: "Nike Alpha Huarache",
      img: img5,
      price: 150,
      detail:
        "The Nike Alpha Huarache brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forwards.",
    },
    "react-phantom-run-flyknit": {
      name: "Nike React Phantom Run",
      img: img6,
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
          <Footer />
        </dataContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
