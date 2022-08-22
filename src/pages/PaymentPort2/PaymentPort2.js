import React, { useState } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import classes from "./PaymentPort2.module.css";
import { Link, useHistory } from "react-router-dom";
const Paymentport2 = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const history = useHistory()

  const openDrawerHandler = () => {
    setShowDrawer(true);
  };

  const closeDrawerHandler = () => {
    setShowDrawer(false);
  };

  const submitHandler = () => {
    history.push("/paymentport/page3")
  };

  const cancelHandler =()=>{
    history.push("/paymentport/page2")
  }

  return (
    <React.Fragment>
      {showDrawer && <BackDrop onClick={closeDrawerHandler} />}
      <SideDrawer show={showDrawer} onClick={closeDrawerHandler}>
        <div className={classes["list-wrapper-draw"]}>
          <ul className={classes["list-wrapper"]}>
          <li>
              <Link to="/">Personal Info</Link>
            </li>
            <li>
              <Link to="/paymentport/page1">Billing Info</Link>
            </li>
            <li>
              <Link to="/paymentport/page3">Confirm Payment</Link>
            </li>
          </ul>
        </div>
      </SideDrawer>
      <hr />
      <header className={classes["header-wrapper"]}>
        <h1>Complete your Purchase</h1>
        <button
          className={classes["header-wrapper__menu-btn"]}
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={classes["main-list-wrapper"]}>
          <ul className={classes["list-wrapper"]}>
          <li>
              <Link to="/">Personal Info</Link>
            </li>
            <li>
              <Link to="/paymentport/page1">Billing Info</Link>
            </li>
            <li>
              <Link to="/paymentport/page3">Confirm Payment</Link>
            </li>
          </ul>
        </div>
        <div className={classes["bar"]}>
          <div className={classes["bar-line"]}></div>
          <div className={classes["sliding-bar"]}></div>
        </div>
      </header>
      <hr />
      <div className={classes["main-wrapper"]}>
        <div className={classes["main-wrapper-item1"]}>
          <span>Item Name</span>
          <span># Price</span>
        </div>
        <div className={classes["main-wrapper-item2"]}>
          <span>Data science and usability</span>
          <span>50,000.00</span>
        </div>
        <div className={classes["main-wrapper-item3"]}>
          <span>Shipping</span>
          <span>0.00</span>
        </div>
        <div className={classes["main-wrapper-item4"]}>
          <hr />
        </div>
        <div className={classes["main-wrapper-item5"]}>
          <span>Total</span>
          <span>50,000.00</span>
        </div>
      </div>

      <div className={classes["button-wrapper"]}>
          <button type="submit" className="button" onClick={submitHandler}>
            Next
          </button>
          <button type="submit" className="button" onClick={cancelHandler}>
            Cancel Payment
          </button>
        </div>
    </React.Fragment>
  );
};

export default Paymentport2;
