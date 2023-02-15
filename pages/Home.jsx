import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../components/ui/PropertyCard";

const Home = () => {
  const APIKEY = import.meta.env.VITE_RAPID_API_HOTELS;
  const [properties, setProperties] = useState([]);
  const getHotels = async () => {
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/list",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": `${APIKEY}`,
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: '{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"destination":{"regionId":"6054439"},"checkInDate":{"day":10,"month":10,"year":2022},"checkOutDate":{"day":15,"month":10,"year":2022},"rooms":[{"adults":2,"children":[{"age":5},{"age":7}]}],"resultsStartingIndex":0,"resultsSize":200,"sort":"PRICE_LOW_TO_HIGH","filters":{"price":{"max":150,"min":100}}}',
    };

    const result = await axios.request(options);
    setProperties(result.data.data.propertySearch.properties);
  };
  useEffect(() => {
    console.log(properties);
    getHotels();
  }, []);
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {properties.map((property) => {
          return <PropertyCard data={property} key={property.id} />;
        })}
      </Grid>
    </>
  );
};

export default Home;
