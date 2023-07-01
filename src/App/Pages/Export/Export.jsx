import React, { useState } from "react";
import "./Export.css";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import { getPayments } from "../../Services/saveTransactionService";
function Export() {
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
    await getPayments({ startDate, endDate })
      .then((response) => {
        exportToExcel(
          response.data.data.payments,
          `mandapalli payments from ${startDate} to ${endDate}`
        );
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="export-container">
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
