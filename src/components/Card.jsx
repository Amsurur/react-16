import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export default function MediaCard({
  image,
  name,
  status,
  handleCheck,
  id,
  handleClickOpen2,
  handleClickOpen3,
}) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {status ? "Active" : "Disabled"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<DeleteOutlineIcon />}
          onClick={() => handleClickOpen2(id)}
          size="small"
        >
          delete
        </Button>
        <Button
          onClick={() => handleClickOpen3(id, status, name, image)}
          size="small"
        >
          Edit
        </Button>
        <Checkbox
          onClick={() => handleCheck(id)}
          checked={status}
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      </CardActions>
    </Card>
  );
}
