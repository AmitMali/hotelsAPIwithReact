import { Link } from "react-router-dom";

const PropertyCard = (props) => {
  const property = props.data;
  return (
    <div className="card" key={property.id}>
      <img
        src={property.propertyImage.image.url}
        className="card-img-top"
        alt={property.name}
      />
      <div className="card-body">
        <h5 className="card-title">{property.name}</h5>
        <p className="card-text">details</p>
        <Link to={`/property/${property.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
