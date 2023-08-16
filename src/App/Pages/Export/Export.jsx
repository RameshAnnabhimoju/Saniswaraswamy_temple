import React, { useState, useEffect } from "react";
import "./Export.css";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import { getPayments } from "../../Services/saveTransactionService";
import Spinner from "react-bootstrap/Spinner";
import { MultiSelect } from "../../components/Multiselect/Multiselect";
function Export() {
  const items = [
    { id: "1", value: "_id" },
    { id: "2", value: "name" },
    { id: "3", value: "gothram" },
    { id: "4", value: "poojaName" },
    { id: "5", value: "pooja" },
    { id: "6", value: "poojaDate" },
    { id: "7", value: "amount" },
    { id: "8", value: "address" },
    { id: "9", value: "city" },
    { id: "10", value: "mandal" },
    { id: "11", value: "state" },
    { id: "12", value: "pincode" },
    { id: "13", value: "mobile" },
    { id: "14", value: "paymentType" },
    { id: "15", value: "paymentMode" },
    { id: "16", value: "transactionId" },
    { id: "17", value: "createdAt" },
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  function exportToExcel(data, filename) {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    const excelBuffer = write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const fileData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(fileData, `${filename}.xlsx`);
  }
  const handleExport = async () => {
    setLoading(true);
    const columns = selectedItems.map((data) => data.value);
    await getPayments({ startDate, endDate, columns, sortBy })
      .then((response) => {
        exportToExcel(
          response.data.data.payments.map((item) => {
            if (!!item.createdAt && !!item.poojaDate) {
              return {
                ...item,
                createdAt: new Date(item.createdAt).toLocaleDateString(),
                poojaDtae: new Date(item.poojaDate).toLocaleDateString(),
              };
            }
            if (!!item.createdAt) {
              return {
                ...item,
                createdAt: new Date(item.createdAt).toLocaleDateString(),
              };
            }
            if (!!item.poojaDate) {
              return {
                ...item,
                poojaDtae: new Date(item.poojaDate).toLocaleDateString(),
              };
            }
            return item;
          }),
          `mandapalli payments from ${startDate} to ${endDate}`
        );
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setStartDate("");
        setEndDate("");
        setLoading(false);
      });
  };
  return (
    <div className="export-container">
      {loading && (
        <div className="payment-loading-container">
          <Spinner
            animation="border"
            variant="warning"
            className="payment-loading"
          />
        </div>
      )}
      <div className="export-heading">Export Payments to Excel</div>
      <label htmlFor="">Select start date</label>
      <input
        type="date"
        name="startDate"
        className="export-inputs"
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
      />
      <label htmlFor="">Select end date</label>
      <input
        type="date"
        name="endDate"
        className="export-inputs"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
      />
      <br />
      <MultiSelect
        items={items}
        state={[selectedItems, setSelectedItems]}
        placeholder="Select the columns"
      />
      <select
        className="export-inputs"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option hidden>Sort By</option>
        <option value="createdAt" id="createdAt">
          createdAt
        </option>
        <option value="poojaDate" id="poojaDate">
          poojaDate
        </option>
      </select>
      <button
        className="btn btn-primary export-submit"
        onClick={handleExport}
        disabled={
          startDate.length < 1 ||
          endDate < 1 ||
          selectedItems.length === 0 ||
          sortBy.length === 0
        }
      >
        Export to Excel
      </button>
    </div>
  );
}
//dummy text for pr

export default Export;
