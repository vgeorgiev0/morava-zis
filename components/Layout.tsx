import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-blue-300 via-blue-100 to-blue-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
