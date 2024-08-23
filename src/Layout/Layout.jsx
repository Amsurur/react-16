import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul className="flex gap-10">
          <Link to={"/"}>home</Link>
          <Link to={"about"}>about</Link>
          <li onClick={() => navigate("contact")}>contact</li>
          <Link to={"users"}>users</Link>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
