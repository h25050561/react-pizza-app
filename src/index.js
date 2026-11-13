import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";

function App() {
    let curTime = new Date();
    let curHours = curTime.getHours();
    let open = 10 < curHours < 22 ? true : false;


    return (
        <>
            <aside className="sidebar">
                <Header />
                <Navbar />
            </aside>
            <div className="container">
                <Menu open={open}/>
                <Footer open={open}/>
            </div>
        </>
    );
}

function Navbar() {
    return <nav>
        <ul>
            <li>
                <span>home thing</span>
            </li>
            <li>
                <span>about</span>
            </li>
            <li>
                <span>product</span>
            </li>
        </ul>
    </nav >
}

function Header() {
    return <h1 className="header">Pizza and not Pasta</h1>
}


function Pizza({ name, ingredients, price, photo, soldOut }) {
    return <div className={soldOut ? "pizza sold-out" : "pizza"}>
        <img src={photo} alt={name} />
        <h2>{name}</h2>
        <Description ingredients={ingredients} price={price} />
    </div>

}

function Description( {ingredients, price} ) {
    return <div>
        <p>{ingredients}</p>
        <h3>${price}</h3>
    </div>
}

function Footer({ open }) {
    if (open) {
        return <>
        <footer className="footer">Were Currently Open</footer>
        <button className="btn">Order</button>
        </>
    }
    else {
        return <>
        <footer className="footer">Sorry Were Closed</footer>
        </>
    }
}

function Menu({ open }) {
    return <div className="menu">
        <h2>Our Menu</h2>
        {open && <p>Authentic Italian Cuisine</p>}
        <div className="pizzas">
            {pizzaData.map(pizza => <Pizza name={pizza.name} ingredients={pizza.ingredients}
            price={pizza.price} photo={pizza.photoName} soldOut={pizza.soldOut}/>)}
        </div>
    </div>
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)