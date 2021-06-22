const headers = [
  { label: "ID", key: "id" },
  { label: "Agri-input Category", key: "name" },
  { label: "Description", key: "description" },
  { label: "Quantity", key: "quantity" },
];

export const ToCSV = (data: IOrders[]) => {
  const csvReport = {
    data: data,
    headers: headers,
    filename: "Clue_Mediator_Report.csv",
  };
  return csvReport;
};
