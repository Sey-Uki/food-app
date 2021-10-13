const initial = {
  food: [],
};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_FOOD': {
      return {
        ...state,
        food: [
          ...action.payload
        ],
      }
    }
    default: { return state }
  }
}