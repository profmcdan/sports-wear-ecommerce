import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
  articles: [],
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
      });
    case FOUND_BAD_WORD:
      return {
        ...state,
        errorMessage: "Forbidden word found",
      };
    default:
      return state;
  }
};

export default rootReducers;
