import http from "../../common/services/interceptorService";

export const SET_ALL_HACKERS = "FETCH_ALL_HACKERS";
export const SET_CURRENT_HACKER = "FETCH_CURRENT_HACKER";
export const ADD_HACKER = "ADD_HACKER";
export const UPDATE_HACKER = "UPDATE_HACKER";
export const DELETE_HACKER = "DELETE_HACKER";

export const setAllHackers = (hackers) => ({
  type: SET_ALL_HACKERS,
  payload: { hackers },
});

export const setSelectedHacker = (hacker) => ({
  type: SET_CURRENT_HACKER,
  payload: { hacker },
});

export const pushHacker = (hacker) => {
  return {
    type: ADD_HACKER,
    payload: { hacker },
  };
};
export const replaceHacker = (id, hacker) => {
  return {
    type: UPDATE_HACKER,
    payload: { id, hacker },
  };
};

export const removeHacker = (id) => {
  return {
    type: DELETE_HACKER,
    payload: { id },
  };
};

export const fetchAllHacker = () => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await http.get("/api/hackers/", config);
    dispatch(setAllHackers(res.data));
  } catch (error) {}
};

export const fetchCurrentHacker = (id) => async (dispatch) => {
  try {
    const res = await http.get(`/api/hackers/${id}`);
    debugger;
    dispatch(setSelectedHacker(res.data));
  } catch (error) {}
};

export const addHacker = (hacker) => async (dispatch) => {
  try {
    console.log(hacker);
    const token = localStorage.getItem("token");
    const config = { headers: { "x-auth-token": token } };
    const res = await http.post("/api/hackers", hacker, config);
    dispatch(pushHacker(res.data));
  } catch (error) {}
};

export const updateHacker = (id, hacker) => async (dispatch) => {
  console.log(hacker);
  try {
    debugger;
    const token = localStorage.getItem("token");
    const config = { headers: { "x-auth-token": token } };
    const res = await http.put(`/api/hackers/${id}`, hacker, config);
    debugger;
    dispatch(replaceHacker(res.data));
  } catch (error) {}
};

export const deleteHacker = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { "x-auth-token": token } };
    await http.delete(`/api/hackers/${id}`, config);
    dispatch(removeHacker(id));
  } catch (error) {}
};
