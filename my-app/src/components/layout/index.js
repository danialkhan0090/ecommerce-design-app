import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header";
import Banner from "../banner";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      {/* Banner only shows on home page */}
      {location.pathname === "/" && <Banner />}
      <Outlet />
    </>
  );
};

export default Layout;

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <div>{children}</div>
//       <Footer />
//     </div>
//   );
// };
// export default Layout;
