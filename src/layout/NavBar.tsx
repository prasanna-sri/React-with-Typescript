import React from "react";
import { isPropertySignature } from "typescript";

interface IProps {
    heading :string;
}

const NavBar:React.FC<IProps> = (props) => {
  return (
    <>
     <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
       <div className="container">
         <a href='/' className="navbar-brand">{props.heading}</a>
       </div>
     </nav>
    </>
  );
}

export default NavBar;