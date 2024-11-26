import React, { Fragment, useEffect } from "react";
import Container from "../Components/Container";
import { CiSearch } from "react-icons/ci";
import apiClient from "../Api/ApiClient";
import ApiEndPoint from "../Api/ApiEndPoint";
import UserItem from "./UserItem";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [filderedUser, setFilderedUser] = React.useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await apiClient.get(ApiEndPoint.USER);
      setUsers(response.data);
      setFilderedUser(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function handleBlockUnblock(chatId) {
    try {
      await apiClient.put(ApiEndPoint.USER, {
        chatId,
        isBlocked: !users.find((user) => user.chatId === chatId).isBlocked,
      });
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  function searchHandler(e) {
    const text = e.target.value;
    if (text.trim() === "") {
      console.log("empty");
      setFilderedUser(users);
    }
    const filteredUsers = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(text.toLowerCase()) ||
        user.lastName.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFilderedUser(filteredUsers);
  }

  return (
    <Fragment>
      {/* Search */}
      <div className="h-14">
        <Container className="h-full w-full flex flex-col justify-center">
          <SearchComponent onChange={searchHandler} />
        </Container>
      </div>
      <div className="my-2"></div>
      {/* Body */}
      <Container className="h-full w-full">
        <div className="p-2">
          <p className="text-2xl">Users</p>
          <div className="flex justify-evenly my-1 items-center font-semibold px-6 py-2 rounded-2xl">
            <p className="">Name</p>
            <p>Username</p>
            <div>City</div>
            <div>CreatedAt</div>
            <div>Action</div>
          </div>
          {/* <UsersTable /> */}
          {filderedUser.map((user) => (
            <UserItem
              key={user.chatId}
              user={user}
              onBlockUnblock={handleBlockUnblock}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

const SearchComponent = ({ onSearch, onChange }) => {
  return (
    <form onSubmit={onSearch} className="flex items-center justify-start gap-2">
      <input
        className="w-full p-2 rounded-2xl bg-slate-100 focus:outline-none"
        type="text"
        placeholder="Search"
        onChange={onChange}
      />
      <button onClick={onSearch} className="p-2 rounded-2xl bg-slate-100">
        <CiSearch size={25} />
      </button>
    </form>
  );
};

export default Users;
