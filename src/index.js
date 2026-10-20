import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Pizza />
            <PizzaTitle />
            <Description />
            <BackButton />
        </div>
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
    return <h1>Pizza and not Pasta</h1>
}

function Pizza() {
    return <img src="pizzas/focaccia.jpg" alt="focaccia"></img>
}

function PizzaTitle() {
    return <h2>focaccia</h2>
}

function Description() {
    return <p>dude i dont know about pizzas idk what this is</p>
}

function BackButton() {
    return <button>Back to Home</button>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)