import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  ADD_COUNT,
} from './actionTypes';
import { createStore } from 'redux';

interface IState {
  count: number;
}
const initState: IState = {
  count: 0,
};
const store = createStore((state: IState = initState, action: any) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
});
export default store;
