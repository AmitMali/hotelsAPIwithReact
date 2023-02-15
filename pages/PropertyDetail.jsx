import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetail = () => {
  const { property_id } = useParams();
  const [propertyDetail, setPropertyDetail] = useState([]);

  useEffect(() => {
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/detail",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "753ed85b07msh54e3d2f2da84240p1ef77ajsn1e8f4c33ad33",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"propertyId":"${property_id}"}`,
    };

    axios.request(options).then((response) => {
      setPropertyDetail(response.data.data.propertyInfo);
      console.log(propertyDetail);
    });
  }, []);
  if (!propertyDetail) return "";
  return (
    <>
      <div>Address: {propertyDetail.summary.location.address.addressLine}</div>

      <Rating defaultValue={3} readOnly />
    </>
  );
};

export default PropertyDetail;
