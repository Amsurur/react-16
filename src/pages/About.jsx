import  { useState, useCallback } from "react";
import Button from "../components/Button";

const About = () => {
  const [count, setCount] = useState(0);

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onIncrement={increment} />
    </div>
  );
};

export default About;
