import React, { useState } from "react";
import "./Explore.css";

const travelPackages = [
  { id: 1, name: "Germany Trip", image: "/e1.jpg", price: "$500" },
  { id: 2, name: "Paris, France Trip", image: "/e2.jpg", price: "$900" },
  { id: 3, name: "Europe Trip", image: "/e3.jpg", price: "$1200" }
];

function Explore() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} your slot has been booked`);
  };

  return (
    <div className="explore">
      <h1>Travel Packages</h1>
      <div className="card-list">
        {travelPackages.map((pkg) => (
          <div key={pkg.id} className="card">
            <img src={pkg.image} alt={pkg.name} />
            <h3>{pkg.name}</h3>
            <p>{pkg.price}</p>
            <button className="btn" onClick={() => addToCart(pkg)}>Book now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;

