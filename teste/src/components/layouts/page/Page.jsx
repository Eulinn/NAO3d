import React from "react";
import Container from "../container/Container";
import styleSheet from './page.module.css';


const Page = ({title, children}) => {
  return (
    <Container f cl C2 scroll pd15 container-configuration>
      <Container styleSheet={{marginBottom:"1rem"}} border-bottom pdy-15>
        <p className={styleSheet.titlePage}>
            {title || "Sem nome"}
        </p>
      </Container>
      {children}
    </Container>
  );
};

export default Page;
