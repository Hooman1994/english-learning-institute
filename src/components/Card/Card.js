import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardComponent(props) {
  let navigate = useNavigate();

  function handleClick(e) {
    debugger;
    navigate(props.url);
  }
  return (
    <div key={props.id}>
      <Card
        style={{ width: "400px", height: "450px", borderRadius: "10px" }}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <CardActionArea sx={{ fontSize: "50px" }}>
          <CardMedia
            component="img"
            image={props.image}
            alt={props.alt}
            style={{ padding: "10px", width: "250px", height: "250px" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              style={{
                direction: "rtl",
                marginRight: "10px",
                fontWeight: "bold",
                fontFamily: "IRANsans",
                fontSize: "22px",
              }}
            >
              {props.bodyOne}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                direction: "rtl",
                height: "400px",
                fontSize: "20px",
                fontFamily: "IRANsans",
              }}
            >
              {props.bodyTwo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
