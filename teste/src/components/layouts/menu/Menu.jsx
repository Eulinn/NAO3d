import React, { useEffect, useState } from "react";
import stylesheet from "./menu.module.css";
import Container from "../container/Container";

import { TbCircleLetterEFilled } from "react-icons/tb";
import { IoBody } from "react-icons/io5";


import { LuLayoutDashboard } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [actRoute, setActRoute] = useState(pathname);

  useEffect(() => {
    setActRoute(pathname);
  }, [pathname]);

  const isActive = (rt) => {
    if (actRoute === rt) return true;
    return false;
  };

  const setActualRoute = (rt) => {
    navigate(rt);
  };

  return (
    <div className={stylesheet.container}>
      <Container styleSheet={{marginBottom:'2rem'}} c of-visible>
        <span className={stylesheet.logo}>
          <TbCircleLetterEFilled />
        </span>
      </Container>

      <nav className={stylesheet.menu}>
        <ul>
          <li
            className={isActive("/") ? stylesheet.activated : ""}
            onClick={() => {
                setActualRoute("/");
            }}
          >
            <LuLayoutDashboard />
          </li>
          <li
            className={isActive("/coreografias") ? stylesheet.activated : ""}
            onClick={() => {
                setActualRoute("/coreografias");
            }}
          >
            <IoBody />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
