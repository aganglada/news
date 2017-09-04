import { RECEIVE_SOURCES } from './index.actions';

export default (state, action) => {
  switch (action.type) {
    case RECEIVE_SOURCES:
      return {
        ...state,
        sources: action.payload.sources
      };

    default:
      return state;
  }
};
