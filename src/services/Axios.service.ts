import axios, { AxiosInstance } from "axios";
import * as authStorage from "./Auth.service";
import { jwtDecode } from "jwt-decode";
import { getAccessToken } from "./Token.service";

export default class AxiosServices {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
    this.registerRequestInterceptor();
  }

  registerRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      async (config: any) => {
        let accessToken = authStorage.getAuthToken();
        let decodedToken;
        if (!accessToken) {
          accessToken = await this.createAuthToken();
        }
        if (accessToken) {
          decodedToken = jwtDecode(accessToken) as any;
          const validTo = decodedToken.exp * 1000;
          const now = new Date().getTime();
          if (now >= validTo) {
            accessToken = await this.createAuthToken();
          }
        } else {
          return false;
        }
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async createAuthToken() {
    const accessToken = await getAccessToken();
    authStorage.setAuthToken(accessToken);
    return accessToken;
  }

  getServiceInstance() {
    return this.axiosInstance;
  }
}
