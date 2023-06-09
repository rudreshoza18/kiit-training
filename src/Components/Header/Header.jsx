import React, { Fragment, Suspense, lazy } from "react";
import Loader from "../../Shared/Loader";
const Header = () => {
  const Navbar = lazy(() => import("../Navbar/Navbar"));
  return (
    <Fragment>
      <Suspense fallback={<Loader className="flex justify-center w-full" />}>
        <Navbar />
      </Suspense>
    </Fragment>
  );
};

export default Header;
