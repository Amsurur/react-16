import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeName,
  handleChangePhone,
  handSaveAdd,
} from "../reducer/TodoSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data, addName, addPhone } = useSelector((state) => state.counter);

  return (
    <Fragment>
      <div className="flex gap-4 mx-2">
        <input
          className="outline-none border-4 rounded-xl "
          type="text"
          name=""
          id=""
          value={addName}
          onChange={(e) => dispatch(handleChangeName(e.target.value))}
        />
        <input
          className="outline-none border-4 rounded-xl"
          type="text"
          name=""
          id=""
          value={addPhone}
          onChange={(e) => dispatch(handleChangePhone(e.target.value))}
        />
        <button onClick={() => dispatch(handSaveAdd())}>save</button>
      </div>
      <div className="flex w-[500px] mx-auto  gap-5">
        {data.map((e) => {
          return (
            <div
              key={e.id}
              className="grid gap-5 border rounded-xl p-2  border-red-400"
            >
              <p>Name : {e.name}</p>
              <p>Phone : {e.phone}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Home;
