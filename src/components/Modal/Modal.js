import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "../../assets/images/main-logo.webp";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Modal(props) {
  const [secondary, setSecondary] = React.useState(false);
  const [open, setOpen] = useState(false);
  const items = props.data;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelete(item) {
    debugger;
    // let _items = [...items];
    // let index = _items.findIndex(item.id);
    alert(item.id + "deleted");
  }

  return (
    <React.Fragment>
      <IconButton>
        <ShoppingCartIcon
          sx={{
            color: "white",
            padding: "15px",
            width: "70px",
            height: "70px",
            position: "absolute",
            left: "330px",
            top: "-580%",
          }}
          onClick={handleClickOpen}
        />
      </IconButton>
      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>سبد خرید</DialogTitle>
        <DialogContent>
          <Grid>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              لیست آیتم ها
            </Typography>
            <List>
              {items &&
                items.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <ListItem
                        secondaryAction={
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon
                              onClick={() => {
                                handleDelete(item);
                              }}
                            />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <img
                            src={item.image}
                            style={{ width: "40px", height: "40px" }}
                            alt={item.alt}
                          ></img>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.body}
                          secondary={item.paragraph}
                        />
                      </ListItem>
                    </div>
                  );
                })}
            </List>
          </Grid>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          ></Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>پرداخت</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
