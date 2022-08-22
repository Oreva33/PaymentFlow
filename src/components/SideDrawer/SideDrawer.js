import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const xref = useRef();
  if (!xref.current) {
    console.log("Oops");
  } else {
    console.log(xref.current.classList);
  }

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <React.Fragment>
        <aside ref={xref} className="side-drawer" onClick={props.onClick}>
          {props.children}
        </aside>

      </React.Fragment>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
