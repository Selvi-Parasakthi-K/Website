import { URL } from "../config/appConfig";
import AxiosServices from "./Axios.service";

const instance = new AxiosServices().getServiceInstance();

export const getUserTransaction = async (userData: any) => {
  const userTransaction = await instance.post(
    URL.recognition.getUserTransaction,
    userData
  );
  return userTransaction;
};

export const getUserRecognitionDetails = async (userId: string) => {
  const userTransaction = await instance.get(
    URL.recognition.getUserRecognitionDetails(userId)
  );
  return userTransaction.data.data;
};
