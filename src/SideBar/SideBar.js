import React from "react";
import { TiWeatherSnow } from "react-icons/ti";
import MenuItem from "./MenuItem";
import Container from "../Components/Container";

const ListOfMenu = [
  {
    id: 1,
    name: "Dashboard",
  },
  {
    id: 2,
    name: "Admin",
  },
  {
    id: 3,
    name: "Users",
  },
  {
    id: 4,
    name: "Apis",
  },
];

const SideBar = () => {
  return (
    <Container className="h-full w-full">
      {/* Header */}
      <div className="flex gap-2 my-6 items-center justify-center">
        <TiWeatherSnow size={30} />
        <h1 className="text-xl font-semibold">Weather App</h1>
      </div>

      {/* Divider */}
      <div className="my-4">
        <hr />
      </div>

      {/* List of menu */}
      {ListOfMenu.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          title={item.name}
          active={item.id === 1}
        />
      ))}

      {/* UserDetails */}
    </Container>
  );
};

export default SideBar;
