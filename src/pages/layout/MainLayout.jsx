import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bgfadeColor">
      <div className="fixed w-full z-50">
        <Header />
      </div>
      <main className="flex-grow mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
