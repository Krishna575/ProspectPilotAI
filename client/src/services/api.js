import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const DEFAULT_TIMEOUT = 120000;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

const getErrorMessage = (error) => {
  const status = error.response?.status;
  const serverMessage = error.response?.data?.message;

  if (status === 429) {
    return "The AI service is rate-limiting requests. Please try again in a moment.";
  }

  if (status === 503) {
    return "The AI service is temporarily unavailable. Please try again shortly.";
  }

  if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
    return "The request took too long. Please try again with a simpler prompt.";
  }

  if (error.message?.includes("Network Error")) {
    return "Network error. Please check your connection and try again.";
  }

  return serverMessage || error.message || "Request failed.";
};

// Request interceptor — attach JWT and log request details.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("pp_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.metadata = { startTime: Date.now() };

    console.info(`[API] ${config.method?.toUpperCase()} ${config.url}`, {
      timeout: config.timeout,
    });

    return config;
  },
  (error) => {
    console.error("[API] Request setup error", error);
    return Promise.reject(error);
  }
);

// Response interceptor — log responses and handle auth errors.
api.interceptors.response.use(
  (response) => {
    const duration = Date.now() - (response.config.metadata?.startTime || Date.now());
    console.info(`[API] ${response.config.method?.toUpperCase()} ${response.config.url} -> ${response.status}`, {
      durationMs: duration,
    });

    return response;
  },
  (error) => {
    const status = error.response?.status;
    const duration = Date.now() - (error.config?.metadata?.startTime || Date.now());

    console.error(`[API] ${error.config?.method?.toUpperCase()} ${error.config?.url} failed`, {
      status,
      message: getErrorMessage(error),
      durationMs: duration,
      code: error.code,
      data: error.response?.data,
    });

    if (status === 401) {
      localStorage.removeItem("pp_token");
      localStorage.removeItem("pp_user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;