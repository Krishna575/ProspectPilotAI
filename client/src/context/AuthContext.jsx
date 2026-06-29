import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { authService } from "../services/authService";

const AuthContext = createContext(null);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "AUTH_INIT":
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case "AUTH_FAILURE":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };

    case "AUTH_LOGOUT":
      return {
        ...initialState,
        isLoading: false,
      };

    case "AUTH_LOADED":
      return {
        ...state,
        isLoading: false,
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Restore session from localStorage
  useEffect(() => {
    const restoreSession = () => {
      const token = localStorage.getItem("pp_token");
      const userRaw = localStorage.getItem("pp_user");

      if (token && userRaw) {
        try {
          const user = JSON.parse(userRaw);

          dispatch({
            type: "AUTH_SUCCESS",
            payload: {
              token,
              user,
            },
          });
        } catch (error) {
          localStorage.removeItem("pp_token");
          localStorage.removeItem("pp_user");

          dispatch({
            type: "AUTH_LOADED",
          });
        }
      } else {
        dispatch({
          type: "AUTH_LOADED",
        });
      }
    };

    restoreSession();
  }, []);

  // LOGIN
  const login = useCallback(async (email, password) => {
    dispatch({ type: "AUTH_INIT" });

    try {
      const data = await authService.login({
        email,
        password,
      });

      const user = {
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role,
      };

      localStorage.setItem("pp_token", data.token);
      localStorage.setItem("pp_user", JSON.stringify(user));

      dispatch({
        type: "AUTH_SUCCESS",
        payload: {
          token: data.token,
          user,
        },
      });

      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Login failed. Please try again.";

      dispatch({
        type: "AUTH_FAILURE",
        payload: message,
      });

      return {
        success: false,
        error: message,
      };
    }
  }, []);

  // REGISTER
  const register = useCallback(async (name, email, password) => {
    dispatch({ type: "AUTH_INIT" });

    try {
      const data = await authService.register({
        name,
        email,
        password,
      });

      const user = {
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role,
      };

      localStorage.setItem("pp_token", data.token);
      localStorage.setItem("pp_user", JSON.stringify(user));

      dispatch({
        type: "AUTH_SUCCESS",
        payload: {
          token: data.token,
          user,
        },
      });

      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      dispatch({
        type: "AUTH_FAILURE",
        payload: message,
      });

      return {
        success: false,
        error: message,
      };
    }
  }, []);

  // LOGOUT
  const logout = useCallback(() => {
    authService.logout();

    dispatch({
      type: "AUTH_LOGOUT",
    });
  }, []);

  // CLEAR ERROR
  const clearError = useCallback(() => {
    dispatch({
      type: "CLEAR_ERROR",
    });
  }, []);

  const value = {
    ...state,
    login,
    register,
    logout,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider"
    );
  }

  return context;
}

export default AuthContext;