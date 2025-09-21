const initialState: number[] = [];

const hơmeork4Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_RANDOM":
      return [...state, Math.floor(Math.random() * 100)];
    default:
      return state;
  }
};

export default hơmeork4Reducer;
