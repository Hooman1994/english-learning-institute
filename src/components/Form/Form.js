import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function Forms(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={props.style} variant={props.variant}>
        {props.buttonTitle}
      </Button>
      {props.formType === "Login" ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              style={{
                justifyContent: "center",
                margin: "100px 30px 50px 100px",
              }}
            >
              <h1>فرم ورود</h1>
              <div style={{ margin: "30px", fontSize: "30px" }}>
                <TextField
                  id="filled-search"
                  label="Email"
                  type="email"
                  variant="filled"
                />
              </div>
              <div style={{ margin: "30px", fontSize: "30px" }}>
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
              </div>
              <Button variant="contained" size="large">
                {props.buttonTitle}
              </Button>
              <IconButton aria-label={props.buttonTitle} color="secondary">
                <Fingerprint />
              </IconButton>
            </div>
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              style={{
                justifyContent: "center",
                margin: "100px 30px 50px 100px",
              }}
            >
              <h1>فرم ثبت نام</h1>
              <div style={{ margin: "30px", fontSize: "30px" }}>
                <TextField
                  id="filled-search"
                  label="Email"
                  type="email"
                  variant="filled"
                />
              </div>
              <div style={{ margin: "30px", fontSize: "30px" }}>
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
              </div>
              <div style={{ margin: "30px", fontSize: "30px" }}>
                <TextField
                  id="filled-password-input"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
              </div>
              <Button variant="contained" size="large">
                {props.buttonTitle}
              </Button>
              <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
              </IconButton>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}
