import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { fetchBerry } from "../store/actions";
import { useDispatch } from "react-redux";
import _ from "lodash";

const state = (state) => state.berriesCollection; // retrieve current berry state from redux store
const state2 = (state) => state.berryDetails; // retrieve berry items state from redux store

const BerryItems = () => {
  const berryDetailsArray = useSelector(state2).berryItemsArray;
  const berry = useSelector(state).currentBerry;
  const dispatch = useDispatch();
  console.log(berry);
  const [berryHolder, setBerryHolder] = useState(null);

  // Avoid duplicate api calls using memoization function
  // const memoizedFetchBerry = _.memoize(fetchBerry())
  // const memoizedFetchBerry = useMemo(fetchBerry, [berry.name])

  const berryItemsList = (selectedBerry) => {
    return (
      <ul>
        <li>Id: {selectedBerry.id}</li>
        <li>Name: {selectedBerry.name}</li>
        <li>Growth Time: {selectedBerry.growth_time}</li>
        <li>Maximum Harvest: {selectedBerry.max_harvest}</li>
        <li>Natural Gift Power: {selectedBerry.natural_gift_power}</li>
        <li>Smoothness: {selectedBerry.smoothness}</li>
        <li>Soil Dryness: {selectedBerry.soil_dryness}</li>
      </ul>
    );
  };

  useEffect(() => {
    let foundBerry = false;
    if (berry) {
      berryDetailsArray.map((singleBerry) => {
        if (berry.name === singleBerry.name) {
          setBerryHolder({ ...singleBerry });
          foundBerry = true;
          console.log("There is something now in berry holder!!");
          console.log(`single berry: ${singleBerry}`);
        }
      });
      if (!foundBerry) {
        console.log("I reached here!!");
        setBerryHolder({...fetchBerry(berry.name)(dispatch)}); //
      }
    }
  }, []);

  return (
    <div>
      <h2>Berry Items</h2>
      {berryHolder && <p>{JSON.stringify(berryHolder)}</p>}
      {/* <Link to="/berry">BerryItems</Link> */}
      {berryHolder ? (
        berryItemsList(berryHolder)
      ) : (
        <p>No items yet, please wait...</p>
      )}
    </div>
  );
};

export default BerryItems;
