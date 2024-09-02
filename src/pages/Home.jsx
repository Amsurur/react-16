import { useState } from "react";
import Comp from "../components/Comp";

const Home = () => {
  const [showHome, setShowHome] = useState(true);

  return (
    <div>
      <button onClick={() => setShowHome(!showHome)}>
        {showHome ? "Скрыть" : "Показать"} компонент Home
      </button>
      {showHome && <Comp count2 />}{" "}
    </div>
  );
};

export default Home;
