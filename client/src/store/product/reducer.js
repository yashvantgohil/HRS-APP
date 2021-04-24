import {
  ADD_PRODUCTS,
  DELETE_PRODUCTS,
  SET_PRODUCTS,
  UPDATE_PRODUCTS,
} from "./actions";
import { updateObj } from "./../../common/utility";

import products from "./products.json";

const productInitialState = {
  products: [...products],
};

const addProduct = (state, product) => {
  const lastId = Math.max.apply(
    Math,
    state.products.map((product) => product.id)
  );
  product.id = lastId + 1;
  const newStateProps = { products: [...state.products, product] };
  updateObj(state, newStateProps);
};

const updateProduct = (state, product) => {
  const index = state.products.findIndex((x) => x.id === product.id);
  const newProducts = state.products.slice();
  newProducts[index] = product;
  return updateObj(state, { products: newProducts });
};

const deleteProduct = (state, id) => {
  const newProducts = state.products.filter((x) => x.id !== id);
  return updateObj(state, { products: newProducts });
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return updateObj(state, action.payload);
    case ADD_PRODUCTS:
      return addProduct(state, action.payload.product);
    case UPDATE_PRODUCTS:
      return updateProduct(state, action.payload.product);
    case DELETE_PRODUCTS:
      return deleteProduct(state, action.payload.id);
    default:
      return state;
  }
};

export default productReducer;
