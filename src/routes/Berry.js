import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBerry } from "../store/actions";
import loader from "../assets/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif";

const state = (state) => state.berriesCollection;
const Berry = (props) => {
  const [currentBerryHolder, setCurrentBerryHolder] = useState(null);
  const currentBerry = useSelector(state).currentBerry;
  const dispatch = useDispatch();
  console.log(currentBerry);
  console.log(window.location.pathname);
  useEffect(() => {
    if (currentBerry) {
      setCurrentBerryHolder({ ...currentBerry });
    } else {
      (async () => {
        let berryName = window.location.pathname.toString();
        berryName = berryName.split("/");
        console.log(berryName, berryName.length);
        berryName = berryName[berryName.length - 1];
        setCurrentBerryHolder({ ...(await fetchBerry(berryName)(dispatch)) });
      })();
    }
  }, []);

  return (
    <div>
      {currentBerryHolder && <h2>Berry Name: {currentBerryHolder.name} </h2>}
      {currentBerryHolder !== null ? (
        <div key={currentBerryHolder.id}>
          {currentBerryHolder.name}{" "}
          <p>
            Please see the berry items{" "}
            <Link to={`/berryItems/${currentBerryHolder.name}`}>
              BerryItems
            </Link>{" "}
            here.
          </p>
        </div>
      ) : (
        <div>
          <img src={loader} alt="loading" />
        </div>
      )}
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
