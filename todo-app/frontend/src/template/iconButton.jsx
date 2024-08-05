import React from "react";

export default (props) => {
  return (
    props.hide ? null : (
      <button className={`btn btn-${props.style}`} onClick={props.onClick}>
        {props.label}{props.icon}
      </button>
    )
  );
}