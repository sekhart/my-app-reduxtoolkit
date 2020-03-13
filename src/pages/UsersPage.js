import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector, fetchUsers } from "../slices/users";

import { User } from "../components/User";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, loading, hasErrors } = useSelector(usersSelector);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUsers = () => {
    if (loading) return <p>Users Loading....</p>;
    if (hasErrors) return <p>Users Loading Failed</p>;

    return users.map(user => <User key={user.id} user={user}></User>);
  };
  return (
    <section>
      <h1>Users</h1>
      <p>Users Details</p>
      {renderUsers()}
    </section>
  );
};

export default UsersPage;
