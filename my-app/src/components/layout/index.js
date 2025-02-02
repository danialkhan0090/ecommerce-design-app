import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
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
