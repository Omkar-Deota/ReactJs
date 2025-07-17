import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const updateCount = () => {
    setCount((cnt) => cnt + 1);
  };

  const showNavBar = (count: number) => {
    if (count % 2 === 0) {
      return <p>Even Number</p>;
    }
    return <Navbar />;
  };

  return (
    <>
      {showNavBar(count)}

      <button
        className="border-2 border-black rounder-lg"
        onClick={updateCount}
      >
        Increase Count
      </button>

      <p>{count}</p>
      <h1 className="text-center text-5xl font-bold">Hii</h1>
    </>
  );
};

//function()
//function

export default App;
