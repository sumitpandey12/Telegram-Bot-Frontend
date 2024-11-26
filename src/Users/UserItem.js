import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { CgUnblock, CgBlock } from "react-icons/cg";

const UserItem = ({ user, onBlockUnblock }) => {
  const createdAt = new Date(user.createdAt);
  return (
    <div className="flex justify-evenly my-1 items-center px-6 py-3 rounded-2xl bg-slate-200">
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.username}</p>
      <div>{user.city ?? "-"}</div>
      <div>
        {createdAt.getDate()}/{createdAt.getMonth()}/{createdAt.getFullYear()}
      </div>
      <LoadingButton
        variant="outlined"
        color="error"
        startIcon={user.isBlocked ? <CgUnblock /> : <CgBlock />}
        onClick={() => onBlockUnblock(user.chatId)}
      >
        {user.isBlocked ? "Unblock" : "Block"}
      </LoadingButton>
    </div>
  );
};

export default UserItem;
