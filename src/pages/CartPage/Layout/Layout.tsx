import { MainHeader } from "./MainHeader";

import { Fragment } from "react";

import "./Layout.css";
export const Layout: React.FC<React.ReactNode> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <div className="main-content">{props.children}</div>
    </Fragment>
  );
};
