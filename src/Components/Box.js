import React from "react";

export function InnerOuterBox(props) {
  return (
    <div className="box-outer">
      <div className="box-inner">{props.children}</div>
    </div>
  );
}

export function InnerOuterCircle(props) {
  return (
    <div className="circle-outer">
      <div className="circle-inner">{props.children}</div>
    </div>
  );
}

export function OuterBox(props) {
  return <div className="outer-box">{props.children}</div>;
}
