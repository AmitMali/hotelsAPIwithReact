import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Badge, Grid, Rating, Stack } from "@mui/material";
import { Box } from "@mui/system";
const PropertyCard = (props) => {
  const property = props.data;
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid md={4}>
          <CardMedia
            component="img"
            alt="green iguana"
            width="280"
            image={property.propertyImage.image.url}
          />
        </Grid>
        <Grid md={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {property.name.slice(0, 20)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={2}>
              <Rating defaultValue={3} readOnly />

              <Link to={`/property/${property.id}`} underline="none">
                View Property
              </Link>
              <Link>Link 3</Link>
            </Stack>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PropertyCard;
