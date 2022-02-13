import React from "react";

const berriesApiList = ["Cheri", "Chesto", "Pecha"];
const BerriesApiListFilter = () => {
  return (
    <div>
      <select>
        {berriesApiList.map((berrieApi, index) => (
          <option key={index}>{berrieApi}</option>
        ))}
      </select>
    </div>
  );
};

export default BerriesApiListFilter;
