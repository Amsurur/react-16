import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserById = () => {
  const params = useParams();

  const Api = "https://6697657702f3150fb66d72df.mockapi.io/users";
  const [data, setData] = useState({});
  async function get() {
    try {
      const { data } = await axios.get(`${Api}/${params.id}`);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    get();
  }, []);

  return (
    <div className="p-10 border w-[300px] m-5">
      <p>{data.name}</p>
      <img src={data.avatar} />
      <p>{data.status ? "Active" : "Inactive"}</p>
      <p>{data.id}</p>
    </div>
  );
};

export default UserById;
