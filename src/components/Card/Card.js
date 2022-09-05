import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardComponent(props) {
  return (
    <div key={props.id}>
      <Card style={{ width: "400px", height: "450px" , borderRadius: "10px"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.image}
            alt={props.alt}
            style={{ padding: "10px", width: "250px", height: "250px" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ direction: "rtl", marginRight: "10px" , fontWeight: "bold"}}
            >
              {props.bodyOne}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ direction: "rtl", height: "400px" , fontSize: "20px", fontWeight: "bold"}}
            >
              {props.bodyTwo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
