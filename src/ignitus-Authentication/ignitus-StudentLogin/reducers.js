import * as t from './actionTypes';

const RESET = {
  isFetching: false,
  message: '',
  success: false,
};

const studentLoginReducer = (state = { isFetching: false, message: '', success: false }, action) => {
  switch (action.type) {
    case t.LOG_IN_RESPONSE:
      return Object.assign({}, state, { isFetching: false }, action.data);

    case t.LOG_IN_REQUEST:
      return Object.assign({}, state, { isFetching: true, message: 'Processing...', success: false });

    case t.LOG_USER_OUT: case t.LOG_IN_CLEAR_PREVIOUS:
      return RESET;

    default:
      return state;
  }
};

export default studentLoginReducer;
