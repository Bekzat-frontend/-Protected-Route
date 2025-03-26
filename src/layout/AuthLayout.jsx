import React from "react";
import { NavLink, Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <header>
        <h1>header</h1>
        <nav>
          <NavLink to="sign-in">Sign-in</NavLink>
          <NavLink to="sign-up">Sign-up</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
