import React, { useContext, useState } from "react";

const Currency = () => {
  const [currency, setCurrency] = useState("£");

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
        <label
          style={{
            background: "#93e49a",
            color: "White",
            height: "37.5px",
            width: "80px",
            textAlign: "center",
            paddingTop: "6px",
            borderRadius: "7px 0 0 7px",
          }}
          htmlFor="inputGroupSelect02"
        >
          Currency
        </label>
      </div>
      <select
        style={{
          border: "none",
          color: "white",
          background: "#93e49a",
          borderRadius: "0 7px 7px 0",
          width: "125px",
          height: "37.5px"
        }}
        onChange={(event) => setCurrency(event.target.value)}
      >
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
