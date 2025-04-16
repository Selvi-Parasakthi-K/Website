import { env } from "../env/env";

export const URL = {
  recognition: {
    getUserTransaction: `${env.REDEEM_BASEURL}/api/VirtualMoneyBalance/transaction`,
    getUserRecognitionDetails: (userId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/recognition/user/${userId}`,
  },
  token: {
    getAuthToken: `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/tokens/accessToken`,
  },
  redeem: {
    getMyOrders: env.REACT_APP_REDEEM_BASEURL + "/api/Order/GetByUser",
    getWalletBalance:
      env.REACT_APP_REDEEM_BASEURL + "/api/VirtualMoneyBalance/userbalance",
  },
  referral: {
    getUserReferralCode: (userId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/referral/user/${userId}`,
  },
  privilegeStage: {
    getUserRewards: `${env.REACT_APP_GAMIFICATION_BASEURL}/leaderBoard/userRewards`,
    getUserBadgesDetails: (appId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/privilegeStage/admin/application/lookup/${appId}`,
  },
  blobStorage: {
    getSasToken: `${env.REACT_APP_GAMIFICATION_BASEURL}/sasToken`,
  },
  leaderBoard: {
    getUserScore: `${env.REACT_APP_GAMIFICATION_BASEURL}/leaderBoard/userScore`,
  },
};
