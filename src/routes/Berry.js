import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBerry } from "../store/actions";

// const state = (state) => state.berryDetails
const state = (state) => state.berriesCollection;
const Berry = (props) => {
  const { myBerryDetails, myFetchBerry } = props;
  const currentBerry = useSelector(state).currentBerry;
  console.log(currentBerry);

  const berryDetails = myBerryDetails;
  // console.log(berryDetails) undefined results

  const handleBerryItemsClick = (e) => {
    // myFetchBerry(e);
  };
  return (
    <div>
      <h2>Berry Name: {currentBerry.name} </h2>
      {currentBerry ? 
        <div key={currentBerry.id}>
          {currentBerry.url} {currentBerry.name}{" "}
          <p>
            Please see the berry items{" "}
            <Link
              to="/berryItems"
              // onClick={() => handleBerryItemsClick(currentBerry.name)}
            >
              BerryItems
            </Link>{" "}
            here.
          </p>
        </div>
       : <h6>No current berry selected!</h6>}
      {/* <Link
        to="/berryItems"
        value={berry}
        onClick={() => handleBerryClick(berry)}
      >
        BerryItems
      </Link> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myBerryDetails: state.berryApiReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myFetchBerry: (filterPayload) => dispatch(fetchBerry(filterPayload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Berry);
