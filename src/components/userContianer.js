import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UseContianer = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div>{loading ? "loading" : data.length ? data.map(name => <p key={name}>{name}</p>) : error}</div>;
};

export default UseContianer;
