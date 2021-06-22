import React, { useReducer } from "react";
import AgriRequestContext from "../../context/agriRequestContext";
import {
  FilterReducer,
  initialFilterState,
} from "../../context/agriRequestReducer";
import AgriRequestData from "../module/agriRequestData/agriRequest";
import NavBar from "../module/navBar/navBar";
import { AgriData } from "../../constant/data";

let navBar = ["pending", "executing", "executed", "completed"];

const AgriInputRequest = () => {
  const [filterState, dispatch] = useReducer(FilterReducer, initialFilterState);

  return (
    <div style={{ flex: 1 }}>
      <AgriRequestContext.Provider
        value={{ Type: filterState, setType: dispatch }}
      >
        <div style={{ fontSize: "24px", margin: "20px", fontWeight: "bold" }}>
          Agri-input Master Maintanance
        </div>
        <NavBar data={navBar} />
        <AgriRequestData data={AgriData.data} />
      </AgriRequestContext.Provider>
    </div>
  );
};

export default AgriInputRequest;
