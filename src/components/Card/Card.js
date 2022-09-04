import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardComponent(props) {
  return (
    <div key={props.id}>
      <Card style={{ width: "300px", height: "400px" }}>
        <CardActionArea>
          <CardMedia component="img" image={props.image} alt={props.alt} style={{ width: "300px", height: "200px" }}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ width: "300px"}}>
              {props.bodyOne}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ width: "300px", height: "400px" }}>
              {props.bodyTwo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
