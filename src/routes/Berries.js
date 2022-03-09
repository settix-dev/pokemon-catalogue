import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createBerry, fetchBerries } from "../store/actions";
import { changeBerryFilter } from "../store/actions/changeFilterAction";
import { fetchBerry } from "../store/actions";
import BerriesApiListFilter from "../components/BerriesApiListFilter";
import Berry from "./Berry";
import { Link } from "react-router-dom";

const Berries = (props) => {
  const [filterBerry, setFilterBerry] = useState("");
  // const [berry, setBerry] = useState('cheri')
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
console.log(berries)
  console.log(`filter: ${filterBerry}`);

  useEffect(() => {
    // berries.length !== 1 &&
    if (berries[0].results.length === 0) {
      myFetchBerries();
    }
  }, []);

  // useEffect(() => {
  //   // myChangeBerryFilter(filterBerry);
  //   // myFetchBerry(filterBerry);
  //   filterBerry === "All"
  //     ? myChangeBerryFilter("")
  //     : myChangeBerryFilter(filterBerry);
  //   myFetchBerry(filterBerry);
  // }, [myChangeBerryFilter, myFetchBerry, filterBerry]);

  // useEffect( () => {
  //   myFetchBerry(filterBerry)
  // }, [myFetchBerry, filterBerry])

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
            {berry.results.length !== 0
              ? berry.results.map((result, index) => (
                  <div key={index}>
                    <>
                      {result.url}
                      <Link
                        to="/berry"
                        onClick={() => handleBerryClick(result)}
                      >
                        {result.name}
                      </Link>
                    </>
                  </div>
                ))
              : "Loading in progress..."}

            {/* {berry.results.length &&
              berry.results.map((result, index) => (
                <div key={index}>
                  <>
                    {result.url}
                    <Link
                      to="/berry"
                      onClick={() => handleBerryClick(result.name)}
                    >
                      {result.name}
                    </Link>
                  </>
                </div>
              ))} */}
          </>
        </ul>
      ))}
      <Link to="/berry">Berry</Link>
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
