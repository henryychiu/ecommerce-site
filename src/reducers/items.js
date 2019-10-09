const itemsReducerDefaultState = [];

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    case 'REMOVE_ITEM':
      return state.filter(({ id }) => (id !== action.id));
    default:
      return state;
  }
};