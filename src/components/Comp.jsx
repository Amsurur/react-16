import React, { useEffect, useState } from "react";

const Comp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент смонтирован");

    return () => {
      console.log("Компонент размонтирован");
    };
  }, []);

  useEffect(() => {
    console.log("Компонент обновлен. Текущее значение count:", count);
  }, [count]);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
    </div>
  );
};

export default Comp;
