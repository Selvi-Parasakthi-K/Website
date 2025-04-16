import getServiceInstance from "./Axios.service";
import { URL } from "../config/appConfig";
import AxiosServices from "./Axios.service";
import { IWallet, IWalletTransaction } from "../models/wallet";

const instance = new AxiosServices().getServiceInstance();

export const getTransactionHistory = async (
  userId: string,
  appId: string
): Promise<IWalletTransaction[]> => {
  const res = await instance.post(URL.redeem.getMyOrders, {
    gamificationUserId: userId,
    gamificationApplicationId: appId,
  });
  console.log("Transaction History", res.data);
  return res.data;
};

export const getWalletBalance = async (appId: string, userId: string) => {
  let walletBalance: IWallet;
  const res = await instance.post(URL.redeem.getWalletBalance, {
    gamificationUserId: userId,
    gamificationApplicationId: appId,
  });
  walletBalance = res.data;
  console.log("Wallet Balance", walletBalance);
  return walletBalance;
};
