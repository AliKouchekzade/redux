import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";
import axios from "axios";

function fetchUsersRequest() {
  return { type: FETCH_USERS_REQUEST };
}

function fetchUsersFailure(error) {
  return { type: FETCH_USERS_FAILURE, payload: error };
}

function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}

export function fetchUsers() {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUsersSuccess(res.data.map(user => user.name))))
      .catch((err) => dispatch(fetchUsersFailure(err.message)));
  };
}
