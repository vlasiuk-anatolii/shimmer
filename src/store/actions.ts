import { ObjectForCart, Product } from '../react-app-env';

// Action types - is just a constant. MUST have a unique value.
export enum ActionType {
  SET_SORT_BY = 'SET_SORT_BY',
  SET_ERROR = 'SET_ERROR',
  SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS',
  SET_CURRENT_PRODUCTS_FOR_RENDER = 'SET_CURRENT_PRODUCTS_FOR_RENDER',
  SET_FAVORITES = 'SET_FAVORITES',
  SET_SELECTED_CART = 'SET_SELECTED_CART',
  DEL_FAVORITES = 'DEL_FAVORITES',
  DEL_FROM_CART = 'DEL_FROM_CART',
  SET_QUANTITY = 'SET_QUANTITY',
  DEL_QUANTITY = 'DEL_QUANTITY',
  SET_QUERY = 'SET_QUERY',
}

export interface SetSortBy {
  type: ActionType.SET_SORT_BY,
  payload: string,
}

export interface SetError {
  type: ActionType.SET_ERROR,
  payload: string,
}

export interface SetAllProducts {
  type: ActionType.SET_ALL_PRODUCTS,
  payload: Product[],
}

export interface SetCurrentProductsForRender {
  type: ActionType.SET_CURRENT_PRODUCTS_FOR_RENDER,
  payload: Product[],
}

export interface SetFavorites {
  type: ActionType.SET_FAVORITES,
  payload: number,
}

export interface SetSelectedCart {
  type: ActionType.SET_SELECTED_CART,
  payload: ObjectForCart,
}

export interface DelFavorites {
  type: ActionType.DEL_FAVORITES,
  payload: number,
}

export interface DelFromCart {
  type: ActionType.DEL_FROM_CART,
  payload: ObjectForCart,
}

export interface DelQuantity {
  type: ActionType.DEL_QUANTITY,
  payload: ObjectForCart,
}

export interface SetQuantity {
  type: ActionType.SET_QUANTITY,
  payload: ObjectForCart,
}

export interface SetQuery {
  type: ActionType.SET_QUERY,
  payload: string,
}

// Action creators - a function returning an action object
export const setSortBy = (payload: string): SetSortBy => ({
  type: ActionType.SET_SORT_BY,
  payload,
});

export const setError = (payload: string): SetError => ({
  type: ActionType.SET_ERROR,
  payload,
});

export const setAllProducts = (payload: Product[]): SetAllProducts => ({
  type: ActionType.SET_ALL_PRODUCTS,
  payload,
});

export const setCurrentProductsForRender = (payload: Product[]): SetCurrentProductsForRender => ({
  type: ActionType.SET_CURRENT_PRODUCTS_FOR_RENDER,
  payload,
});

export const setFavorites = (payload: number): SetFavorites => ({
  type: ActionType.SET_FAVORITES,
  payload,
});

export const setSelectedCart = (payload: ObjectForCart): SetSelectedCart => ({
  type: ActionType.SET_SELECTED_CART,
  payload,
});

export const delFavorites = (payload: number): DelFavorites => ({
  type: ActionType.DEL_FAVORITES,
  payload,
});

export const delFromCart = (payload: ObjectForCart): DelFromCart => ({
  type: ActionType.DEL_FROM_CART,
  payload,
});

export const delQuantity = (payload: ObjectForCart): DelQuantity => ({
  type: ActionType.DEL_QUANTITY,
  payload,
});

export const setQuantity = (payload: ObjectForCart): SetQuantity => ({
  type: ActionType.SET_QUANTITY,
  payload,
});

export const setQuery = (payload: string): SetQuery => ({
  type: ActionType.SET_QUERY,
  payload,
});
