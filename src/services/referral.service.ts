import { URL } from "../config/appConfig";
import AxiosServices from "./Axios.service";

const instance = new AxiosServices().getServiceInstance();

export const getUserReferralCode = async (userId: string) => {
  const userReferralCode = await instance.get(
    URL.referral.getUserReferralCode(userId)
  );
  return userReferralCode.data.data;
};
