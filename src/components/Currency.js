import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);
  
  const handleChange = (selection) => {
    dispatch({
        type: "CHG_CURRENCY",
        payload: selection
    })
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: "lightgray",
        width: "100%",
        height: "73%",
        borderRadius: "7.5px"
      }}
    >
      <div style={{ marginLeft: "2rem" }}>
      </div>
      <select
        style={{
          border: "none",
          color: "white",
          background: "#93e49a",
          borderRadius: "7px",
          width: "200px",
          height: "37.5px"
        }}
        onChange={(event) => handleChange(event.target.value)}
      >
        <option value="" disabled>
          Currency (£ Pound)
        </option>
        <option value="$" name="Dollar">
          $ Dollar
        </option>
        <option defaultValue value="£" name="Pound">
          £ Pound
        </option>
        <option defaultValue value="€" name="Euro">
          € Euro
        </option>
        <option defaultValue value="₹" name="Rupe">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default Currency;
