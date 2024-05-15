import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 min-h-0'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
