import { FC, useEffect, useState } from "react";
import "./PointsTable.scss";
import { getUserTransaction } from "../../services/recognition.service";
import { getTransactionHistory } from "../../services/redeem.service";

interface PointsTableProps {}

interface WalletTransaction {
  id: string;
  eventType?: number;
  createdOn: string;
  virtualMoneyCount: number;
  transactionType?: string;
  isCredit: boolean;
  productName?: string;
}

const PointsTable: FC<PointsTableProps> = () => {
  const [walletHistory, setWalletHistory] = useState<WalletTransaction[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWalletHistory = async () => {
      try {
        const userId = "selvi.as@theproindia.com";
        const appId = "666935365e88bddd252809ec";

        const user = {
          userId: userId,
          applicationId: appId,
          fromDate: "2024-02-29T18:30:00.000Z",
          toDate: "2025-05-28T18:30:00.000Z",
          pageSize: 7,
          pageNumber: 1,
          CoinConversionType: null,
        };

        const [creditResponse, redeemResponse] = await Promise.all([
          getUserTransaction(user),
          getTransactionHistory(userId, appId),
        ]);

        const creditHistory = (creditResponse?.data?.auditLogs || []).map(
          (item: any) => ({
            id: item.id,
            eventType: item.eventType,
            createdOn: item.createdOn,
            virtualMoneyCount: item.virtualMoneyCount,
            transactionType: item.transactionType,
            isCredit: true,
          })
        );

        const redeemHistory = (redeemResponse || []).map((item: any) => ({
          id: item.id,
          createdOn: item.createdOn,
          virtualMoneyCount: item.virtualMoneyCount,
          productName: item.productName,
          isCredit: false,
        }));

        const combinedHistory = [...creditHistory, ...redeemHistory].sort(
          (a, b) =>
            new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime()
        );

        console.log("Combined Wallet History:", combinedHistory);

        setWalletHistory(combinedHistory);
        setTotalCount(creditResponse?.data?.totalCount || 0);
      } catch (err) {
        console.error("Failed to fetch wallet history:", err);
        setError("Failed to load wallet history");
      } finally {
        setLoading(false);
      }
    };

    fetchWalletHistory();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  if (loading) {
    return (
      <div className="PointsTable mx-8 flex justify-center items-center h-64">
        <div>Loading wallet history...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="PointsTable mx-8 flex justify-center items-center h-64">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="PointsTable mx-8" data-testid="PointsTable">
      <div className="main-table bg-white rounded-2xl pt-0 pb-4 px-4">
        <table className="table mb-4 w-full">
          <thead className="table-header">
            <tr>
              <th scope="col">Transaction ID</th>
              <th scope="col">Transaction Type</th>
              <th scope="col">Date</th>
              <th scope="col">Credit/Debit</th>
              <th scope="col">Coins</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {walletHistory.length > 0 ? (
              walletHistory.map((wallet, index) => (
                <tr key={index}>
                  <td scope="row">{wallet.id || "N/A"}</td>
                  <td>
                    {wallet.isCredit
                      ? wallet.eventType === 1
                        ? "Recognition Coins"
                        : wallet.eventType === 0
                        ? "Milestone Crossed Coins"
                        : "Other Transaction"
                      : `Redeemed: ${wallet.productName}`}
                  </td>
                  <td>{formatDate(wallet.createdOn)}</td>
                  <td>
                    <span
                      className={`${
                        wallet.isCredit ? "credit" : "redeem"
                      } px-2 py-1 font-normal rounded-3xl`}
                    >
                      {wallet.isCredit ? "Credit" : "Redeem"}
                    </span>
                  </td>
                  <td>{wallet.virtualMoneyCount.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
