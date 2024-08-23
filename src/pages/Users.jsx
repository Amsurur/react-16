import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const Api = "https://6697657702f3150fb66d72df.mockapi.io/users";
  const [data, setData] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get(Api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <div className="  grid xs:grid-cols-1 justify-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((e) => {
        return (
          <div
            className="p-10 border-4 border-red-400 lg:w-[100%] md:w-[100%] sm:w-[100%] xs:w-[100%] m-10"
            key={e.id}
          >
            <Link to={`/users/${e.id}/${e.status}`}>{e.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
