import { Button, TextField } from "@mui/material";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const Api = "https://6697657702f3150fb66d72df.mockapi.io/users";
  const [data, setData] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [idx, setIdx] = useState(null);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState("");
  const { i18n, t } = useTranslation();

  async function get() {
    try {
      const { data } = await axios.get(search ? `${Api}/?name=${search}` : Api);

      setData(data);
      setNotFound("");
    } catch (error) {
      console.error(error.request.status);
      if (error.request.status == 404) {
        setData([]);
        setNotFound("not found");
      }
    }
  }
  async function editData() {
    const obj = {
      name: editName,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/362.jpg",
      status: false,
    };
    try {
      await axios.put(`${Api}/${idx}`, obj);
      get();
      setEditModal(false);
    } catch (error) {
      console.error(error);
    }
  }
  async function handleDelete(id) {
    try {
      await axios.delete(`${Api}/${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  const handleEdit = (e) => {
    setEditModal(true);
    setEditName(e.name);
    setIdx(e.id);
  };

  useEffect(() => {
    get();
  }, [search]);

  return (
    <div>
      
      <div>
        <TextField value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <h1>{notFound}</h1>
      {data.map((e) => {
        return (
          <div key={e.id}>
            {e.name}
            <Button onClick={() => handleEdit(e)}>edit</Button>
            <Button onClick={() => handleDelete(e.id)}>delete</Button>
          </div>
        );
      })}
      {editModal ? (
        <div className="absolute top-0 left-0  w-[100%] bg-black/50 h-[100vh]">
          <div className="h-[200px] w-[300px] rounded-lg m-auto mt-[15%] bg-white ">
            <TextField
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              type="text"
            />
            <Button onClick={() => editData()}>save</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
