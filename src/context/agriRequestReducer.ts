interface Action {
  type: string;
}

export const initialFilterState: string = "executing";

export const FilterReducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "executed":
      return "executed";
    case "executing":
      return "executing";
    case "completed":
      return "completed";
    default:
      return "pending";
  }
};
