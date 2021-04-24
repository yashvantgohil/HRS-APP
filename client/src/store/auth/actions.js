import http from "../../common/services/interceptorService";

export const USER_LOGOUT = "USER_LOGOUT";
export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const SET_REDIRECT = "SET_REDIRECT";

export const setUser = (user) => ({ type: SET_USER, payload: { user } });
export const setToken = (token) => ({ type: SET_TOKEN, payload: { token } });
export const userLoggout = () => ({ type: USER_LOGOUT });
export const setRedirect = (url) => ({ type: SET_REDIRECT, payload: { url } });

export const loadUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { "x-auth-token": token } };
    const res = await http.post("/api/auth/me", null, config);
    localStorage.setItem("currentUser", res.data);
    dispatch(setUser(res.data));
    dispatch(setToken(token));
  } catch (error) {}
};

export const login = (user) => async (dispatch) => {
  try {
    const config = { headers: { "Content-type": "application/json" } };
    const res = await http.post("/api/auth", user, config);
    localStorage.setItem("token", res.data);
    dispatch(setToken(res.data));
  } catch (error) {}
};

export const singUp = (user) => async (dispatch) => {
  try {
    const res = await http.post("/api/users", user);
    const token = res.headers["x-auth-token"];
    dispatch(setUser(res.data));
    dispatch(setToken(token));
  } catch (error) {}
};
