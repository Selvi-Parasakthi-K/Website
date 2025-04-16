export interface IWalletTransaction {
  referenceId: string;
  vendorOrderId: string;
  orderStatus: string;
  redemptionRuleId: string;
  applicationUserId: string;
  transactionAmount: number;
  billingUserName: string;
  billingUserPhoneNumber: string;
  billingUserEmail: string;
  productName: string;
  productImageUrl: string;
  gamificationApplicationId: string;
  virtualMoneyId: string;
  virtualMoneyCount: number;
  virtualMoneyName: string;
  virtualMoneyImageUrl: string;
  id: string;
  createdOn: string;
  updatedOn: string;
}

export interface IBalance {
  id: string;
  name: string;
  balance: number;
  imageUrl: string;
}

export interface IWallet {
  balance: IBalance[];
  gamificationUserId: string;
  gamificationUserName: string;
}
