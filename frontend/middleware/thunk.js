// It should check the typeof incoming actions and either return action(dispatch) if they are
// functions, or next(action) if they are not.

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
}
export default thunk;
