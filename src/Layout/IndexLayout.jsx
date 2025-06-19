import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";  

const IndexLayout = () => {
  return (
    <div>
      <header className="bg-black p-5 text-center text-white">
        <ul className="flex items-center justify-end gap-x-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
            <Link to="/dashboard" className="bg-white px-3 py-1 rounded-md text-black font-medium">
              Dashboard
            </Link>
        </ul>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="bg-black p-5 text-white text-center">
        Footer
      </footer>
    </div>
  );
};

export default IndexLayout;