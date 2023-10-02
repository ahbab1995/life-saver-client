export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, card: [...state.card, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        card: state.card.filter((c) => c._id !== action.payload._id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        card: state.card.filter((c) =>
          c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
     
      default:
      return state;
  }
};