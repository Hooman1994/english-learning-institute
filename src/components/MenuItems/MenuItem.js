import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function FadeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{
          color: "white",
          fontSize: "22px",
          marginRight: "20px",
          fontWeight: "bold",
          fontFamily: "IRANsans",
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {props.subMenu &&
          props.subMenu.map((item, index) => {
            return (
              <div key={item.id}>
                <MenuItem
                  style={{
                    direction: "rtl",
                    color: "black",
                    fontSize: "20px",
                    marginRight: "20px",
                    fontFamily: "IRANsans",
                  }}
                  onClick={handleClose}
                >
                  {item.title}
                </MenuItem>
              </div>
            );
          })}
      </Menu>
    </div>
  );
}
