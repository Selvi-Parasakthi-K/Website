import axios from "axios";
import { URL } from "../config/appConfig";
import { env } from "../env/env";
import { setAuthToken } from "./Auth.service";
let clientCredentials: any;

export const getAccessToken = async () => {
  try {
    const response = await axios.post(`${URL.token.getAuthToken}`, {
      clientId: env.clientId,
      clientSecret: env.clientSecret,
    });
    setAuthToken(response.data.data.access_token);
    return response.data.data.access_token;
  } catch (error) {
    throw error;
  }
};

export const initializeClientCredentials = (
  clientId: string,
  clientSecret: string
) => {
  clientCredentials = {
    clientId: clientId,
    clientSecret: clientSecret,
  };
};

export const checkAccessToken = async (clientCredential: any) => {
  try {
    const response = await axios.post(`${URL.token.getAuthToken}`, {
      clientId: clientCredential.clientId,
      clientSecret: clientCredential.clientSecret,
    });
    return response.data.data.access_token;
  } catch (error) {
    throw error;
  }
};
