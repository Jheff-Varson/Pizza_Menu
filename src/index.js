import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  const style = {color: 'blue' }
  // const style = {};

  return (
    <header className="header">
      <h1 style={style}>JEFF REACT PIZZA CO.</h1>
    </header>
  );
};

function Menu() {
  const pizzas = pizzaData;
    // const pizzas = [];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza key={pizza.name} pizzaObj={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're out of pizza Currently, check back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        photourl="./assests/spinaci.jpg"
        price={10}
        ingredients={"Tomato, mozarella, spinach, and ricotta cheese"}
      />
      <Pizza
        name="Pizza Funghi"
        price={20}
        photourl="/pizza-menu/public/pizzas/funghi.jpg"
        ingredients={"Tomato, mozarella, mushrooms, and onion"}
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  //   console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're offline, kindly come back between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn" onClick={() => {alert('THANKS FOR CHECKING OUT MY SPA')} }>Order Now</button>
    </div>
  );
};

//React v18 >
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React < v18
// React.render(<App />, document.getElementById("root"));
