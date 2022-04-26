import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBerry } from "../store/actions";
import { useDispatch } from "react-redux";
import loader from "../assets/ezgif-2-6d0b072c3d3f.gif";

const state = (state) => state.berriesCollection; // retrieve current berry state from redux store
const state2 = (state) => state.berryDetails; // retrieve berry items state from redux store

const BerryItems = () => {
  const berryDetailsArray = useSelector(state2).berryItemsArray;
  console.log("Hello Gift!!");
  console.log(berryDetailsArray);
  const berry = useSelector(state).currentBerry;
  const dispatch = useDispatch();
  console.log(berry);
  const [berryHolder, setBerryHolder] = useState(null);
  let filter = window.location.pathname.split("/");
  console.log(window.location);
  filter = filter[filter.length - 1];

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
    berryDetailsArray.map((singleBerry) => {
      if (filter === singleBerry.name) {
        setBerryHolder({ ...singleBerry });
        foundBerry = true;
        console.log("There is something now in berry holder!!");
        console.log(`single berry: ${singleBerry}`);
      }
    });

    if (!foundBerry) {
      console.log("I reached here!!");

      // setBerryHolder({...fetchBerry(berry.name)(dispatch)});
      // Use IIFE because fetch berry returns a promise
      (async () => {
        setBerryHolder({ ...(await fetchBerry(filter)(dispatch)) });
      })();
    }
  }, []);

  return (
    <div>
      <h2>Berry Items</h2>
      {berryHolder ? (
        berryItemsList(berryHolder)
      ) : (
        <div>
          <img src={loader} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default BerryItems;
