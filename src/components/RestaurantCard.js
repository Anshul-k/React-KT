import { CLOUD_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, avgRating, sla, costForTwo, cuisines, cloudinaryImageId } =
    props?.resData?.info;

  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-image"
          alt="res-image"
          src={CLOUD_URL + cloudinaryImageId}
        />
      </div>
      <div className="res-content-container">
        <h3 className="res-name">{name}</h3>
        <div className="res-details">
          <h4 className="res-ratings">{avgRating} stars</h4>
          <h4 className="res-delivery">{sla?.slaString}</h4>
        </div>
        <h5 className="res-cost">{costForTwo}</h5>
        <h5 className="res-cuisine">{cuisines.join(", ")}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
