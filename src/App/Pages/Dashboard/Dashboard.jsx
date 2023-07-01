import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import reload from "../../Assets/Images/reload.png";
import exportImg from "../../Assets/Images/xls-file2.png";
import { getPayments } from "../../Services/saveTransactionService";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [startRange, setStartRange] = useState(0);
  // const [endRange, setEndRange] = useState(0);
  // console.log(currentPage, totalPages, startRange, endRange);
  const startDate = new Date("2023-06-30");
  const endDate = new Date().getDate();
  useEffect(() => {
    fetchPayments(startDate, endDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function fetchPayments(startDate, endDate) {
    try {
      await getPayments({ startDate, endDate })
        .then((response) => {
          if (response.data.status === "success") {
            setPayments(response.data.data.payments);
            // setTotalPages(response.data.data.totalCount);
            // setStartRange(response.data.data.startRange);
            // setEndRange(response.data.data.endRange);
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.status === "failed") {
            localStorage.removeItem("madapalli_token");
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  // const handlePreviousPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };
  return (
    <div className="dashboard-container">
      {/* <div className="dashboard-menu">Payments Received</div> */}
      <div className="dashboard-contents">
        <div className="dashboard-contents-header">
          <div className="dashboard-contents-heading">Payments Received</div>
          <div className="dashboard-contents-actions">
            <div className="dashboard-actions">
              <img
                src={reload}
                alt="reloadimg"
                className="action-icon"
                onClick={() => fetchPayments(startDate, endDate)}
              />
            </div>
            <div className="dashboard-actions">
              <img
                src={exportImg}
                alt="reloadimg"
                className="action-icon"
                onClick={() => navigate("/Export")}
              />
            </div>
          </div>
        </div>
        <div className="dashboard-contents-body">
          <div className="dashboard-table">
            <table>
              <thead>
                <tr>
                  <th className="dashboard-table-cells dashboard-cells">
                    Transaction ID
                  </th>
                  <th className="dashboard-table-cells dashboard-cells">
                    Date
                  </th>
                  <th className="dashboard-table-cells dashboard-cells">
                    Pooja Name
                  </th>
                  <th className="dashboard-table-cells dashboard-cells">
                    type
                  </th>
                  <th className="dashboard-table-cells dashboard-cells">
                    Mode
                  </th>
                  <th className="table-amount dashboard-cells">Amount</th>
                  <th className="dashboard-table-cells dashboard-cells">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="dashboard-table-body">
                {payments.map((payment) => {
                  return (
                    <tr>
                      <td className="dashboard-table-cells">
                        {payment.transactionId}
                      </td>
                      <td className="dashboard-table-cells">
                        {payment.createdAt.split("T")[0]}
                      </td>
                      <td className="dashboard-table-cells">
                        {payment.poojaName}
                      </td>
                      <td className="dashboard-table-cells">
                        {payment.paymentType}
                      </td>
                      <td className="dashboard-table-cells">
                        {payment.paymentMode}
                      </td>
                      <td className=" table-amount">{payment.amount}</td>
                      <td className="dashboard-table-cells table-details">
                        View
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <div className="dashboard-pagination">
            <button
              className="btn btn-primary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span style={{ margin: "0 2%" }}>
              <b>{`${startRange} to ${endRange} from ${totalPages} results`}</b>
            </span>
            <button
              className="btn btn-primary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
