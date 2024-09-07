import { useDispatch, useSelector } from "react-redux";
import { GetTodo } from "../api/TodoApi";
import { useEffect } from "react";
import "./home.css";
const Home = () => {
  let dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.counter);
  useEffect(() => {
    dispatch(GetTodo());
  }, []);
  console.log(isLoading);
  
  if (isLoading) {
    return (
      <div className=" absolute right-0 top-0 w-[100%] bg-[black] h-[100svh]  loader"></div>
    );
  }
  return (
    <div className="w-[300px] mx-auto">
      {data?.map((e) => {
        return <div key={e.id}>{e.name}</div>;
      })}
    </div>
  );
};

export default Home;
