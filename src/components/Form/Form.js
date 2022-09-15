import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import styles from "../Form/Form.module.scss";
import FacebookSVG from "../../assets/images/facebook.svg";
import YouTubeSVG from "../../assets/images/youtube.svg";
import LinkedinSVG from "../../assets/images/linkedin.svg";
import TwitterSVG from "../../assets/images/twitter.svg";
import InstagramSVG from "../../assets/images/instagram.svg";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 800,
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function Forms(props) {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleClickLogin() {
    setLoading(true);
    setAlert(true);
  }
  function handleClickRegister() {
    debugger;
    setLoading(true);
    setAlert(true);
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    debugger;
    setOpen(false);
    setAlert(false);
    setLoading(false);
  };

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
            {alert && (
              <Alert
                severity="success"
                style={{
                  position: "absolute",
                  width: "95%",
                  fontSize: "24px",
                  fontFamily: "IRANsans",
                  direction: "rtl",
                }}
              >
                <AlertTitle
                  style={{
                    fontSize: "24px",
                    fontFamily: "IRANsans",
                    direction: "rtl",
                  }}
                >
                  عملیات موفق
                </AlertTitle>
                عملیات <strong>ورود</strong> با موفقیت انجام شد
              </Alert>
            )}

            <div
              style={{
                justifyContent: "center",
                margin: "130px 30px 50px 100px",
              }}
            >
              <h1>فرم ورود</h1>
              <div style={{ margin: "30px", fontSize: "30px" }}>
                <TextField
                  id="filled-search"
                  label="Username"
                  type="text"
                  variant="filled"
                />
              </div>
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
              {/* <Button
                variant="contained"
                size="large"
                onClick={handleClose}
                style={{
                  color: "white",
                  fontSize: "18px",
                  marginRight: "20px",
                  fontFamily: "IRANsans",
                }}
              >
                {props.buttonTitle}
              </Button> */}
              <LoadingButton
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "IRANsans",
                }}
                color="secondary"
                onClick={handleClickLogin}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                {props.buttonTitle}
              </LoadingButton>
              <IconButton aria-label={props.buttonTitle} color="secondary">
                <Fingerprint />
              </IconButton>
            </div>
            <div className={styles.footerContainer}>
              ما را در شبکه های اجتماعی دنبال کنید
              <div className={styles.socialNetwork}>
                <a href="https://www.instagram.com/">
                  <img
                    alt="Instagram"
                    src={InstagramSVG}
                    width="50"
                    height="50"
                  />
                </a>
                <a href="https://twitter.com/">
                  <img alt="Twitter" src={TwitterSVG} width="50" height="50" />
                </a>
                <a href="https://www.YouTube.com/">
                  <img alt="YouTube" src={YouTubeSVG} width="50" height="50" />
                </a>
                <a href="https://www.Facebook.com/">
                  <img
                    alt="Facebook"
                    src={FacebookSVG}
                    width="50"
                    height="50"
                  />
                </a>
                <a href="https://www.Linkedin.com/">
                  <img
                    alt="Linkedin"
                    src={LinkedinSVG}
                    width="50"
                    height="50"
                  />
                </a>
              </div>
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
            {alert && (
              <Alert
                severity="success"
                style={{
                  position: "absolute",
                  width: "95%",
                  fontSize: "24px",
                  fontFamily: "IRANsans",
                  direction: "rtl",
                }}
              >
                <AlertTitle
                  style={{
                    fontSize: "24px",
                    fontFamily: "IRANsans",
                    direction: "rtl",
                  }}
                >
                  عملیات موفق
                </AlertTitle>
                عملیات <strong>ثبت نام</strong> با موفقیت انجام شد
              </Alert>
            )}
            <div
              style={{
                justifyContent: "center",
                margin: "120px 30px 50px 100px",
              }}
            >
              <h1>فرم ثبت نام</h1>
              <div style={{ margin: "30px", fontSize: "30px" }}>
                <TextField
                  id="filled-search"
                  label="Username"
                  type="text"
                  variant="filled"
                />
              </div>
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
              <LoadingButton
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "IRANsans",
                }}
                color="success"
                onClick={handleClickRegister}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                {props.buttonTitle}
              </LoadingButton>
              <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
              </IconButton>
            </div>
            <div className={styles.footerContainer}>
              ما را در شبکه های اجتماعی دنبال کنید
              <div className={styles.socialNetwork}>
                <a href="https://www.instagram.com/">
                  <img
                    alt="Instagram"
                    src={InstagramSVG}
                    width="50"
                    height="50"
                  />
                </a>
                <a href="https://twitter.com/">
                  <img alt="Twitter" src={TwitterSVG} width="50" height="50" />
                </a>
                <a href="https://www.YouTube.com/">
                  <img alt="YouTube" src={YouTubeSVG} width="50" height="50" />
                </a>
                <a href="https://www.Facebook.com/">
                  <img
                    alt="Facebook"
                    src={FacebookSVG}
                    width="50"
                    height="50"
                  />
                </a>
                <a href="https://www.Linkedin.com/">
                  <img
                    alt="Linkedin"
                    src={LinkedinSVG}
                    width="50"
                    height="50"
                  />
                </a>
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}
