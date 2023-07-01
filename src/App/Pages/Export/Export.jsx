import React, { useState, useEffect } from "react";
import "./Export.css";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import { getPayments } from "../../Services/saveTransactionService";
import Spinner from "react-bootstrap/Spinner";
function Export() {
  const [loading, setLoading] = useState(false);
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
    await getPayments({ startDate, endDate })
      .then((response) => {
        exportToExcel(
          response.data.data.payments,
          `mandapalli payments from ${startDate} to ${endDate}`
        );
      })
      .catch((error) => console.log(error))
      .finally(() => {
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
      <div className="export-heading">Export Payments to Xlsx</div>
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
      <button
        className="btn btn-primary export-submit"
        onClick={handleExport}
        disabled={startDate.length < 1 && endDate < 1}
      >
        Export to xlsx
      </button>
    </div>
  );
}

export default Export;
