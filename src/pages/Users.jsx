import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Field, Form, Formik } from "formik";
import FileBase64 from "react-file-base64";
const Users = () => {
  const [data, setData] = useState([]);
  let Api = "https://6697657702f3150fb66d72df.mockapi.io/users";
  const [open, setOpen] = useState(false);
  const [editObj, setEditObj] = useState({});
  const [idx, setIdx] = useState(null);
  const [base64, setBase64] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function get() {
    try {
      const { data } = await axios.get(Api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function add(values) {
    try {
      const { data } = await axios.put(`${Api}/${idx}`, values);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  const handeEdit = (name, status, avatar, id) => {
    handleClickOpen();
    setEditObj({
      name: name,
      status: status,
      avatar: avatar,
    });
    setBase64(avatar);
    setIdx(id);
  };
  const handleFileChange = (event) => {
    setBase64(event.base64);
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <div>
        <Button onClick={handleClickOpen}>add user</Button>
      </div>
      {data.map((e) => {
        return (
          <div key={e.id}>
            <p>{e.name}</p>
            <img className="w-40 h-40" src={e.avatar} alt="" />
            <Button onClick={() => handeEdit(e.name, e.status, e.avatar, e.id)}>
              edit
            </Button>
          </div>
        );
      })}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new User</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={editObj}
            onSubmit={(values, { resetForm }) => {
              add({ ...values, avatar: base64 });
              resetForm();
              handleClose();
            }}
          >
            <Form>
              <Field
                style={{
                  border: "1px solid red",
                  outline: "none",
                  padding: "5px",
                }}
                name="name"
              />
              <FileBase64 onDone={handleFileChange} />
              <img src={base64} alt="" />
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Users;
