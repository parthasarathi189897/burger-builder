import React from "react";
import "./Layout.css";

const layout = props => (
  <>
    <div>Toolbar, Drawer, backdrop</div>
    <main className="content">{props.children}</main>
  </>
);

export default layout;
