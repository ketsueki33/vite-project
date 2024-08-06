import "./App.css";
import CartItem from "./components/CartItem";
import TopNav from "./components/TopNav";

const items = [
    {
        name: "Carribean Spicy Burger",
        img: "/Burger.png",
        cal: 350,
        price: 200,
    },
    {
        name: "Carribean Spicy Burger",
        img: "/Burger.png",
        cal: 350,
        price: 200,
    },
];

function App() {
    return (
        <div className="flex flex-col gap-4 bg-secondary-bg h-full">
            <TopNav />
            <div className="flex flex-col p-2 gap-2">
                {items.map((ele) => {
                    return (
                        <CartItem
                            key={ele.name}
                            img={ele.img}
                            price={ele.price}
                            cal={ele.cal}
                            name={ele.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
