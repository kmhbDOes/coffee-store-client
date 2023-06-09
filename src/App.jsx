import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const loadedCoffee = useLoaderData();
  const [coffee, setCoffee] = useState(loadedCoffee);
  return (
    <div className="m-20">
      <h1 className="text-6xl text-purple-600 text-center my-20">
        Hot Cold Coffee: {coffee.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffee.map((c) => (
          <CoffeeCard
            key={c._id}
            c={c}
            coffee={coffee}
            setCoffee={setCoffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
