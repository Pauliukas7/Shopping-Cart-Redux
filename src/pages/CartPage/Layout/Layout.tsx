import MainHeader from "./MainHeader";

import { Fragment } from "react";

import "./Layout.css";
const Layout = (props: any) => {
  return (
    <Fragment>
      <MainHeader />
      <div className="main-content">{props.children}</div>
    </Fragment>
  );
};

export default Layout;
