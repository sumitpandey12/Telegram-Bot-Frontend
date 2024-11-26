import axios from "axios";
const API_BASE_URL =
  "https://telegram-bot-backend-9dsfekhh4-sumitpandey12s-projects.vercel.app";

class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          console.error("API Error:", error.response.data);
          if (error.response.status === 401) {
            // window.location.href = "/auth";
          }
        }
        return Promise.reject(error);
      }
    );
  }

  get(url, params = {}) {
    return this.client.get(url, { params });
  }

  post(url, data = {}) {
    return this.client.post(url, data);
  }

  put(url, data = {}) {
    return this.client.put(url, data);
  }
}

const apiClient = new ApiClient();
export default apiClient;
