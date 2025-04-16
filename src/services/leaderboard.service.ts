import getServiceInstance from "./Axios.service";
import { URL } from "../config/appConfig";
import AxiosServices from "./Axios.service";

const instance = new AxiosServices().getServiceInstance();

export const getUserScore = async (userId: string, appId: string) => {
  let userScore: any;
  const res = await instance.post(URL.leaderBoard.getUserScore, {
    appId: appId,
    userId: userId,
  });
  userScore = res.data;
  return userScore.data;
};
