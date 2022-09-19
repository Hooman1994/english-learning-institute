import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ComplexCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleAddToCart(e) {
    debugger;
    let newItem =[...items]
    newItem.push(e);
    setItems(newItem);
    console.log(items);
    props.getItems(items);
  }

  return (
    <Card
      sx={{
        maxHeight: "900px",
        minWidth: "100px",
        margin: "50px 50px 100px 50px",
        textAlign: "right",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardHeader title={props.title} subheader={props.date} />
      <div style={props.imageStyle}>
        <CardMedia
          component="img"
          height="300"
          width="50"
          image={props.image}
          alt={props.alt}
        />
      </div>
      <div style={props.bodyStyle}>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontFamily: "IRANsans", fontWeight: "bold" }}
          >
            {props.body}
          </Typography>
        </CardContent>
      </div>
      <CardActions disableSpacing>
        {props.favoriteIcons && (
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        )}
        {props.shoppingIcons && (
          <IconButton aria-label="buy">
            <ShoppingCartIcon onClick={(e) => handleAddToCart(props.item)} />
          </IconButton>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            style={{
              fontFamily: "IRANsans",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            paragraph
          >
            :توضیحات
          </Typography>
          <div style={props.paragraphStyle}>
            <Typography
              style={{ fontFamily: "IRANsans", fontSize: "16px" }}
              paragraph
            >
              {props.paragraph}
            </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
