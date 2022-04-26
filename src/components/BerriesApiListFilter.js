import React from "react";

export const berriesApiList = [
  2, 3, 4, 5, 8, 12
];
const BerriesApiListFilter = ({ filterBerry, handleFilterChange }) => {
  return (
    <div>
      <label>Berries</label>
      <select value={filterBerry} onChange={(e) => handleFilterChange(e)}>
        <option value={"All"}>All</option>
        {berriesApiList.map((berrieApi, index) => (
          <option key={index}>{berrieApi}</option>
        ))}
      </select>
    </div>
  );
};

export default BerriesApiListFilter;
