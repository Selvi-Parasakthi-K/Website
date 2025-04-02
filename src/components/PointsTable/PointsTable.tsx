import { FC } from "react";
import "./PointsTable.scss";

interface PointsTableProps {}

const PointsTable: FC<PointsTableProps> = () => {
  const tableData = [
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Credit",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Redeem",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Credit",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Redeem",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Credit",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Redeem",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Credit",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Redeem",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Redeem",
      amount: "10,000",
    },
    {
      rewardId: "7522FGHJKJ",
      rewardCategory: "Vouchers",
      date: "18 March 2025",
      creditRedeem: "Credit",
      amount: "10,000",
    },
  ];

  return (
    <div className="PointsTable mx-8" data-testid="PointsTable">
      <div className="main-table bg-white rounded-2xl pt-0  pb-4 px-4">
        <table className="table mb-4 w-full">
          <thead className="table-header">
            <tr>
              <th scope="col">Rewards ID</th>
              <th scope="col">Rewards Categories</th>
              <th scope="col">Date</th>
              <th scope="col">Credit/Redeem</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {tableData.map((data, index) => (
              <tr key={index}>
                <td scope="row">{data.rewardId}</td>
                <td>{data.rewardCategory}</td>
                <td>{data.date}</td>
                <td>
                  <span
                    className={`${
                      data.creditRedeem === "Credit" ? "credit" : "redeem"
                    } px-2 py-1 font-normal rounded-3xl`}
                  >
                    {data.creditRedeem}
                  </span>
                </td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
