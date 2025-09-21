const initialState = { company: "Rikkei Academy" };

const homework5Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_COMPANY":
      return { company: "RikkeiSoft" };
    default:
      return state;
  }
};

export default homework5Reducer;
