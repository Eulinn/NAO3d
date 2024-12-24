import React, { useState } from "react";
import styleSheet from "./dropdown.module.css";
import Container from "../container/Container";

import { IoIosArrowDown } from "react-icons/io";

const DropDown = ({title, children}) => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () =>{
    setOpen(!open);
  }


  return (
    <Container C1 cl radius-1>
      <div className={styleSheet.DropDownTitle} onClick={handleOpenDropdown}>
        <span className={open ? styleSheet.rotate : ""}>
          <IoIosArrowDown />
        </span>
        <p>{title}</p>
      </div>
      <div className={`${styleSheet.DropDown} ${open ? styleSheet.open : ""}`}>
        {children}
      </div>
    </Container>
  );
};

export default DropDown;
