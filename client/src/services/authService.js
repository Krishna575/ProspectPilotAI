import api from "./api";

export const authService = {
// Login user
login: async (credentials) => {
const response = await api.post("/auth/login", credentials);
return response.data;
},

// Register user
register: async (userData) => {
const response = await api.post("/auth/register", userData);
return response.data;
},

// Get logged-in user profile
getMe: async () => {
const response = await api.get("/auth/profile");
return response.data;
},

// Logout (client-side only)
logout: () => {
localStorage.removeItem("pp_token");
localStorage.removeItem("pp_user");
},
};
