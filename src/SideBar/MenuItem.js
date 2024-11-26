import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiAdminLine, RiUserSmileLine, RiKey2Line } from "react-icons/ri";

const MenuItem = ({ active, id, title }) => {
  const IconComponent = getIconById(id);
  return (
    <div
      className={`flex gap-2 my-1 items-center px-6 py-3 rounded-2xl cursor-pointer ${
        active && "bg-slate-900"
      } ${!active && "hover:bg-slate-300"}`}
    >
      <IconComponent size={20} color={active ? "white" : "black"} />
      <p className={`${active && "text-white"}`}>{title}</p>
    </div>
  );
};

const getIconById = (id) => {
  switch (id) {
    case 1:
      return TbLayoutDashboardFilled;
    case 2:
      return RiAdminLine;
    case 3:
      return RiUserSmileLine;
    case 4:
      return RiKey2Line;
    default:
      return TbLayoutDashboardFilled;
  }
};

export default MenuItem;
