import React from "react";

export const berriesApiList = [
  "cheri",
  "chesto",
  "pecha",
  "aspear",
  "leppa",
  "oran",
  "persim",
  "lum",
  "sitrus",
  "figy",
  "wiki",
  "mago",
  "aguav",
  "iapapa",
  "razz",
  "bluk",
  "nanabu",
  "wepear",
  "pinap"
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
