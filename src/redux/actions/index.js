const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
const DECREMENT_ITEM_QTY_IN_CART = 'DECREMENT_ITEM_QTY_IN_CART';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const deleteItemFromCart = (product) => ({
    type: DELETE_ITEM_FROM_CART,
    payload: product
});

export const decrementItemQtyInCart = (product) => ({
    type: DECREMENT_ITEM_QTY_IN_CART,
    payload: product
});