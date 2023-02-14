import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../components/ui/PropertyCard";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const getHotels = async () => {
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/list",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "753ed85b07msh54e3d2f2da84240p1ef77ajsn1e8f4c33ad33",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: '{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"destination":{"regionId":"6054439"},"checkInDate":{"day":10,"month":10,"year":2022},"checkOutDate":{"day":15,"month":10,"year":2022},"rooms":[{"adults":2,"children":[{"age":5},{"age":7}]}],"resultsStartingIndex":0,"resultsSize":200,"sort":"PRICE_LOW_TO_HIGH","filters":{"price":{"max":150,"min":100}}}',
    };

    const result = await axios.request(options);
    setProperties(result.data.data.propertySearch.properties);
  };
  useEffect(() => {
    getHotels();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {properties.map((property) => {
            return (
              <div className="col-md-4 col-lg-3 ">
                <PropertyCard data={property} key={property.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
