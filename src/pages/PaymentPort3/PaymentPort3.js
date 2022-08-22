import React, { useState } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import classes from "./PaymentPort3.module.css";
import tick from "../../image/tick.png";
import { Link } from "react-router-dom";
const Paymentport3 = (props) => {
  return (
    <React.Fragment>
      <hr />
      <header className={classes["header-wrapper"]}>
      </header>
      <hr />
      <div className={classes["main-wrapper"]}>
        <div className={classes["main-wrapper-item1"]}>
          <img src={tick} />
        </div>
        <div className={classes["main-wrapper-item2"]}>
          <span>Purchase Completed</span>
        </div>
        <div className={classes["main-wrapper-item3"]}>
          <span>Please check your email for details concerning</span>
          <span>this transaction</span>
        </div>

        <div className={classes["main-wrapper-item4"]}>
          <Link to="/">Return Home</Link>
        </div>
      </div>


    </React.Fragment>
  );
};

export default Paymentport3;
