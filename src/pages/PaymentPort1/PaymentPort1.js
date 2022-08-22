import React, { useState } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import classes from "./PaymentPort1.module.css";
import { Link, useHistory } from "react-router-dom";
const Paymentport1 = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const history = useHistory();

  const openDrawerHandler = () => {
    setShowDrawer(true);
  };

  const closeDrawerHandler = () => {
    setShowDrawer(false);
  };

  const submitHandler = () => {
    history.push("/paymentport/page2");
  };

  const cancelHandler = () => {
    history.push("/paymentport/page1");
  };

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
      <form className={classes["signup-form"]}>
        <label htmlFor="name" >
          Name on Card <span>*</span>
        </label>
        <input type="text" id="name" placeholder="Opara Linus Ahmed"/>
        <label htmlFor="text">
          Card Type <span>*</span>
        </label>
        <select value="Visa">
          <option value="Visa">Visa</option>
          <option value="Verve">Verve</option>
          <option value="Master card">Master card</option>
        </select>
        <div className={classes["card-details"]}>
          <div className={classes["card-details-1"]}>
            <label htmlFor="Card details" >
              Card details <span>*</span>
            </label>
            <input type="text" id="Card details" placeholder="44960 44960 44960 44960"/>
          </div>
          <div className={classes["card-details-2"]}>
            <label htmlFor="Expiry date">
              Expiry date <span>*</span>
            </label>
            <input type="month" id="Expiry date" min="2020-01" />
          </div>
          <div className={classes["card-details-3"]}>
            <label htmlFor="CVV" >
              CVV <span>*</span>
            </label>
            <input type="text" id="CVV" placeholder="923"/>
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
      </form>
    </React.Fragment>
  );
};

export default Paymentport1;
