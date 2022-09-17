import * as React from "react";
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxHeight: "900px",
        minWidth: "320px",
        margin: "50px 50px 100px 50px",
        textAlign: "right",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardHeader title={props.title} subheader={props.date} />
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: "IRANsans" }}
        >
          {props.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {props.favoriteIcons && (
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        )}
        {props.shoppingIcons   && (
          <IconButton aria-label="buy">
            <ShoppingCartIcon />
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
          <Typography style={{ fontFamily: "IRANsans" }} paragraph>
            :توضیحات
          </Typography>
          <Typography
            style={{ fontFamily: "IRANsans", fontWeight: "bold" }}
            paragraph
          >
            {props.paragraph1}
          </Typography>
          <Typography style={{ fontFamily: "IRANsans" }}>
            {props.paragraph2}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
