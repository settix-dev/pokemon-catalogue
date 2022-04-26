import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { createBerry, fetchBerries } from "../store/actions";
import { changeBerryFilter } from "../store/actions/changeFilterAction";
import { fetchBerry } from "../store/actions";
import BerriesApiListFilter from "../components/BerriesApiListFilter";
import loader from "../assets/loading-buffering.gif";
import { Link } from "react-router-dom";

const state = (state) => state.berryDetails; // Retrieve berry items details state from redux store
const Berries = (props) => {
  const berryItemsArray = useSelector(state).berryItemsArray;
  console.log(berryItemsArray);
  const [filterBerry, setFilterBerry] = useState("");
  const {
    myFetchBerries,
    myBerriesCollection,
    myChangeFilterState,
    myChangeBerryFilter,
    myBerryDetails,
    myFetchBerry,
    myCreateBerry,
  } = props;

  const berries = myBerriesCollection.berries;
  console.log(berries);
  const berryItems = myBerryDetails.berryItems;
  console.log(berryItems);

  // store berries in local storage
  localStorage.setItem("berries", JSON.stringify(berries));

  const filter = myChangeFilterState.filter;
  console.log(`Filter state: ${filter}`);

  const handleFilterChange = (e) => {
    console.log(e.target.value);

    setFilterBerry(e.target.value === "All" ? "" : e.target.value);
  };
  console.log(berries);
  console.log(`filter: ${filterBerry}`);

  useEffect(() => {
    if (berries[0].results.length === 0) {
      myFetchBerries();
    }
  }, []);

  useEffect(() => {
    filterBerry === "All"
      ? myChangeBerryFilter("")
      : myChangeBerryFilter(filterBerry);
    console.log("I have also made it here.");
  }, [myChangeBerryFilter, myFetchBerry, filterBerry]);

  const handleBerryClick = (e) => {
    console.log(e);
    myCreateBerry(e);
  };

  return (
    <div>
      <h3>Berries Api</h3>
      <BerriesApiListFilter
        filterBerry={filterBerry}
        handleFilterChange={handleFilterChange}
      />
      {berries.map((berry, index) => (
        <ul key={index}>
          <>
            {berry.results.length !== 0 ? (
              (filterBerry === ""
                ? berry.results
                : berryItemsArray.filter(
                    (result) => result.growth_time.toString() === filterBerry
                  )
              ).map((result, index) => (
                <div key={index}>
                  <>
                    <Link
                      to={`/berry/${result.name}`}
                      onClick={() => handleBerryClick(result)}
                    >
                      {result.name}
                    </Link>
                  </>
                </div>
              ))
            ) : (
              <div>
                <img src={loader} alt="loading" />
              </div>
            )}
          </>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myBerriesCollection: state.berriesCollection,
    myChangeFilterState: state.changeFilterState,
    myBerryDetails: state.berryDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myFetchBerries: () => dispatch(fetchBerries()),
    myChangeBerryFilter: (filterPayload) =>
      dispatch(changeBerryFilter(filterPayload)),
    myFetchBerry: (filterPayload) => dispatch(fetchBerry(filterPayload)),
    myCreateBerry: (berry) => dispatch(createBerry(berry)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Berries);
