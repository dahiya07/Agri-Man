import { createContext } from "react";

interface filter {
  Type: string;
  setType: Function;
}

const AgriRequestContext = createContext({ Type: "pending" } as filter);

export default AgriRequestContext;
