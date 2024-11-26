import React from "react";
import Container from "../../Components/Container";
import SideBar from "../../SideBar/SideBar";
import UpdateKey from "../../UpdateKey/UpdateKey";
import Users from "../../Users/Users";

const HomePage = () => {
  return (
    <div className="bg-slate-400 h-screen w-screen flex">
      <div className="w-1/5 m-2">
        <SideBar />
      </div>
      <div className="w-4/5 flex flex-col m-2">
        {/* Users */}
        <div className="h-full flex flex-col">
          <Users />
        </div>
        <div className="my-2"></div>
        <div className="h-1/4">
          <Container className="h-full w-full">
            <UpdateKey />
          </Container>
        </div>

        {/* Admin */}
      </div>
    </div>
  );
};

export default HomePage;
