import React from "react";
import "./Dashboard.css";
import reload from "../../Assets/Images/reload.png";
import exportImg from "../../Assets/Images/xls-file2.png";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-menu">Payments Received</div>
      <div className="dashboard-contents">
        <div className="dashboard-contents-header">
          <div className="dashboard-contents-heading">Payments Received</div>
          <div className="dashboard-contents-actions">
            <div className="dashboard-actions">
              <img src={reload} alt="reloadimg" className="action-icon" />
            </div>
            <div className="dashboard-actions">
              <img src={exportImg} alt="reloadimg" className="action-icon" />
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
              <tbody>
                <tr>
                  <td className="dashboard-table-cells">152365</td>
                  <td className="dashboard-table-cells">30-06-2023</td>
                  <td className="dashboard-table-cells"> Pooja</td>
                  <td className="dashboard-table-cells">QR</td>
                  <td className="table-amount">15000</td>
                  <td className="dashboard-table-cells table-details">View</td>
                </tr>
                <tr>
                  <td className="dashboard-table-cells">656542</td>
                  <td className="dashboard-table-cells">31-06-2023</td>
                  <td className="dashboard-table-cells">Donation</td>
                  <td className="dashboard-table-cells">QR</td>
                  <td className="table-amount">1000</td>
                  <td className="dashboard-table-cells table-details"> View</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dashboard-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
