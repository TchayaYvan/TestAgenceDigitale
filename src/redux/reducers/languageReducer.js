const initialState = {
  language: "fr", // Langue par défaut
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
