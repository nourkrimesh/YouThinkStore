let cart = [];
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
const DECREMENT_ITEM_QTY_IN_CART = 'DECREMENT_ITEM_QTY_IN_CART';

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ADD_TO_CART:
            const toAddExist = state.find(prod => prod.id === product.id);
            if (toAddExist) {
                return state.map((prod) => prod.id === product.id ? { ...prod, qty: prod.qty + 1 } : prod);
            }
            else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ];
            }
        case DELETE_ITEM_FROM_CART:
            const toDel = state.find(prod => prod.id === product.id);
            if (toDel) {
                return state.filter((x) => x.id !== toDel.id);
            }
            else {
                return state;
            }

        case DECREMENT_ITEM_QTY_IN_CART:
            const toDec = state.find(prod => prod.id === product.id);
            if (toDec && toDec.qty > 1) {
                return state.map((prod) => prod.id === product.id ? { ...prod, qty: prod.qty - 1 } : prod);
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

export default handleCart;