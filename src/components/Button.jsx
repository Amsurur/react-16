import { memo } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const Button = memo(({ onIncrement }) => {
  console.log("Button re-rendered");
  return <button onClick={onIncrement}>Increment</button>;
});
export default Button;
