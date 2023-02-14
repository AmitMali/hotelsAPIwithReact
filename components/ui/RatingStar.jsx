import React from "react";

const RatingStar = (props) => {
  return (
    <ul
      class="rating"
      data-mdb-toggle="rating"
      data-mdb-readonly="true"
      data-mdb-value="3"
    >
      <li>
        <i class="fa-star fa-sm text-primary fas active"></i>
      </li>
      <li>
        <i class="fa-star fa-sm text-primary fas active"></i>
      </li>
      <li>
        <i class="fa-star fa-sm text-primary fas active"></i>
      </li>
      <li>
        <i class="far fa-star fa-sm text-primary"></i>
      </li>
      <li>
        <i class="far fa-star fa-sm text-primary"></i>
      </li>
    </ul>
  );
};

export default RatingStar;
