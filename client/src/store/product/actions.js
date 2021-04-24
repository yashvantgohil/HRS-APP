export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: { products },
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: { product },
  };
};

export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: { product },
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCTS,
    payload: { id },
  };
};
