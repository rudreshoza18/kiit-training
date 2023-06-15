import React, { Fragment, Suspense, lazy } from "react";
import Loader from "../../Shared/Loader";
import Navbar from "../../Components/Navbar/Navbar";
const Header = () => {
  // const Navbar = lazy(() => import("../Navbar/Navbar"));
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
};

export default Header;
