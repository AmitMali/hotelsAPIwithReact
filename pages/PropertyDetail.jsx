import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStar from "../components/ui/RatingStar";

const PropertyDetail = () => {
  const { id } = useParams();
  const [propertyDetail, setPropertyDetail] = useState([]);
  const getPropertyDetail = async () => {
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/detail",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "753ed85b07msh54e3d2f2da84240p1ef77ajsn1e8f4c33ad33",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"propertyId":"${id}"}`,
    };

    const response = await axios.request(options);
    setPropertyDetail(response.data.data.propertyInfo);
    console.log(propertyDetail);
  };
  useEffect(() => {
    getPropertyDetail();
  }, []);
  return (
    <>
      {propertyDetail ? (
        <div>
          Address: {propertyDetail.summary.location.address.addressLine}
        </div>
      ) : (
        <></>
      )}
      <Rating defaultValue={3} />
    </>
  );
};

export default PropertyDetail;
