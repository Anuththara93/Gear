import DataTable from "../../components/dataTable/dataTable";
import "./orders.css";
import { useState } from "react";
import { orders } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "customerId",
    type: "integer",
    headerName: "Customer Id",
    width: 130,
  },
  {
    field: "orderDescription",
    type: "string",
    headerName: "Order Description",
    width: 400,
  },
  {
    field: "totalCost",
    type: "integer",
    headerName: "Total Cost",
    width: 150,
  },
  {
    field: "deliveryAddress",
    headerName: "Delivery Address",
    width: 150,
    type: "string",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="orders">
      Order
      
    </div>
  );
};

export default Orders;