import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import MediaCard from "./components/Card";
import { useState } from "react";
import AddDialogs from "./components/AddDialog";
import DeleteDialogs from "./components/DeleteDialog";
import EditDialogs from "./components/EditDialog";
import Switcher from "./components/Switcher";

const App = () => {
  const [data, setData] = useState([
    {
      name: "екнро",
      status: true,
      image: "екн",
      id: "1",
    },
    {
      name: "dwqd",
      status: false,
      image: "wqdqd",
      id: "2",
    },
    {
      name: "Modern Plastic Soap",
      status: true,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/976.jpg",
      id: "3",
    },
    {
      name: "Modern Granite Ball",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/112.jpg",
      id: "4",
    },
    {
      name: "Intelligent Cotton Ball",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg",
      id: "5",
    },
    {
      name: "Generic Frozen Tuna",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg",
      id: "6",
    },
    {
      name: "Handmade Concrete Bacon",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1241.jpg",
      id: "7",
    },
    {
      name: "Ergonomic Bronze Pants",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg",
      id: "8",
    },
    {
      name: "Rustic Soft Tuna",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
      id: "9",
    },
    {
      name: "Tasty Wooden Fish",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/452.jpg",
      id: "10",
    },
    {
      name: "Handcrafted Frozen Cheese",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1229.jpg",
      id: "11",
    },
    {
      name: "Oriental Frozen Pizza",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/617.jpg",
      id: "12",
    },
    {
      name: "Practical Soft Bacon",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1002.jpg",
      id: "13",
    },
    {
      name: "Licensed Plastic Fish",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/446.jpg",
      id: "14",
    },
    {
      name: "Recycled Steel Cheese",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/438.jpg",
      id: "15",
    },
    {
      name: "Licensed Wooden Keyboard",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/152.jpg",
      id: "16",
    },
    {
      name: "Luxurious Concrete Towels",
      status: false,
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/607.jpg",
      id: "17",
    },
  ]);
  const [search, setSearch] = useState("");
  const [age, setAge] = useState("all");
  const [age2, setAge2] = useState("");
  const [addName, setAddName] = useState("");
  const [addImage, setAddImage] = useState("");
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [idx, setIdx] = useState(null);
  const [idx2, setIdx2] = useState(null);
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const handleCheck = (id) => {
    setData(
      data.map((e) => {
        if (e.id == id) {
          e.status = !e.status;
        }
        return e;
      })
    );
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = (id) => {
    setOpen2(true);
    setIdx(id);
  };
  const handleClickOpen3 = (id, status, name, image) => {
    setOpen3(true);
    setIdx2(id);
    setAge2(status);
    setEditImage(image);
    setEditName(name);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleAddData = () => {
    let obj = {
      id: Date.now(),
      name: addName,
      image: addImage,
      status: false,
    };
    setData([obj, ...data]);
    setOpen(false);
  };
  const handleRemoveData = () => {
    setData(data.filter((e) => e.id !== idx));
    setOpen2(false);
  };
  const addDialogProps = {
    addName: addName,
    setAddName: setAddName,
    setAddImage: setAddImage,
    addImage: addImage,
    open: open,
    handleClose: handleClose,
    handleAddData: handleAddData,
  };
  const deleteDialogProps = {
    open: open2,
    handleClose: handleClose2,
    handleRemoveData: handleRemoveData,
  };
  const handleEditData = () => {
    let obj = {
      id: idx2,
      name: editName,
      image: editImage,
      status: age2,
    };
    setData(
      data.map((e) => {
        if (e.id === idx2) {
          e = obj;
        }
        return e;
      })
    );
    handleClose3();
  };
  const editDialogProps = {
    editName: editName,
    setEditName: setEditName,
    setEditImage: setEditImage,
    editImage: editImage,
    open: open3,
    handleClose: handleClose3,
    handleEditData: handleEditData,
    age2: age2,
    handleChange2: handleChange2,
  };
  return (
    <div className="dark:bg-[black] bg-[white]">
      <Switcher />
      {/* <Box
        sx={{
          width: "60%",
          margin: "50px auto",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <TextField
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          variant="outlined"
          size="small"
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={true}>Active</MenuItem>
            <MenuItem value={false}>Disable</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleClickOpen} variant="outlined">
          Add
        </Button>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "80%",
          margin: "30px auto",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {data
          .filter((e) =>
            age == "all"
              ? e
              : age == true
              ? e.status == true
              : e.status == false
          )
          .filter((e) =>
            e.name
              .toLocaleLowerCase()
              .trim()
              .includes(search.toLocaleLowerCase())
          )
          .map((e) => {
            return (
              <MediaCard
                handleClickOpen3={handleClickOpen3}
                handleClickOpen2={handleClickOpen2}
                id={e.id}
                handleCheck={handleCheck}
                name={e.name}
                image={e.image}
                status={e.status}
                key={e.id}
              />
            );
          })}
      </Box>
      <AddDialogs {...addDialogProps} />
      <DeleteDialogs {...deleteDialogProps} />
      <EditDialogs {...editDialogProps} /> */}
    </div>
  );
};

export default App;
