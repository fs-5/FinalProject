import React from "react";
import Routers from "../routers/Routers";
import TabMenu from "../components/header/TabMenu";

const Layout = () => {
  return (
    <div>
      <main>
        <Routers />
      </main>
    </div>
  );
};

export default Layout;
