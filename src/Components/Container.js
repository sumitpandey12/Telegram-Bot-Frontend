import React from "react";

const Container = (props) => {
  return (
    <div className={`bg-slate-300 p-1 rounded-2xl ${props.className}`}>
      <div className={`p-2 bg-slate-100 rounded-2xl ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
