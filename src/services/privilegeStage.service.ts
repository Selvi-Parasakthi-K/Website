import getServiceInstance from "./Axios.service";
import { URL } from "../config/appConfig";
import AxiosServices from "./Axios.service";

const instance = new AxiosServices().getServiceInstance();

export const getUserRewards = async (appId: string, userId: string) => {
  let userRewards: any;
  const res = await instance.post(URL.privilegeStage.getUserRewards, {
    appId: appId,
    userId: userId,
  });
  userRewards = res.data;
  return userRewards.data;
};

export const getPrivilegeStageLookup = async (appId: string) => {
  const userBadges = await instance.get(
    URL.privilegeStage.getUserBadgesDetails(appId)
  );
  return userBadges.data.data;
};

export const getSasToken = async () => {
  let sasToken = await instance.get(URL.blobStorage.getSasToken, {});

  if (sasToken != null) {
    return sasToken["data"]["data"];
  }
  return "";
};
