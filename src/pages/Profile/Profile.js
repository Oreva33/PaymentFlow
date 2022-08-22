import React, { useState } from "react";
import BackDrop from "../../components/BackDrop/BackDrop";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import "./Profile.css";
import { NavLink, useHistory } from "react-router-dom";
const Profile = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const history = useHistory()

  const openDrawerHandler = () => {
    setShowDrawer(true);
  };

  const closeDrawerHandler = () => {
    setShowDrawer(false);
  };

  const submitHandler = () => {
    history.push("/paymentport/page1")
  };

  const cancelHandler =()=>{
    history.push("/")
  }


  return (
    <React.Fragment>
      {showDrawer && <BackDrop onClick={closeDrawerHandler} />}
      <SideDrawer show={showDrawer} onClick={closeDrawerHandler}>
        <div className="list-wrapper-draw">
          <ul className="list-wrapper">
            <li>
              <NavLink activeClassName="" to="/">Personal Info</NavLink>
            </li>
            <li>
              <NavLink to="/paymentport/page1">Billing Info</NavLink>
            </li>
            <li>
              <NavLink to="/paymentport/page3">Confirm Payment</NavLink>
            </li>
          </ul>
        </div>
      </SideDrawer>
      <hr />
      <header className="header-wrapper">
        <h1>Complete your Purchase</h1>
        <button
          className="header-wrapper__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="main-list-wrapper">
        <ul className="list-wrapper">
            <li>
              <NavLink to="/">Personal Info</NavLink>
            </li>
            <li>
              <NavLink to="/paymentport/page1">Billing Info</NavLink>
            </li>
            <li>
              <NavLink to="/paymentport/page3">Confirm Payment</NavLink>
            </li>
          </ul>
        </div>
        <div className="bar">
          <div className="bar-line"></div>
          <div className="sliding-bar"></div>
        </div>
      </header>
      <hr />
      <form className="signup-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"  placeholder="Opara Linus Ahmed"/>
        <label htmlFor="email">
          Email Address <span>*</span>
        </label>
        <p>The purchase reciept would be sent to this address</p>
        <input type="email" id="email"  placeholder="OparaLinusAhmed@devmail.com"/>
        <label htmlFor="address1">Address 1</label>
        <input type="text" id="address1" placeholder="The address of the user goes here" />
        <label htmlFor="address2">Address 2</label>
        <input type="text" id="address2" placeholder="and here" />
        <div className="bio">
          <div className="bio-1">
            <label htmlFor="local-government">Local Government</label>
            <input type="text" id="local-government" placeholder="Surulere" />
          </div>
          <div className="bio-2">
            <label htmlFor="state">State</label>
            <select >
              <option value="Lagos">Lagos</option>
              <option value="Ogun">Ogun</option>
              <option value="2020">Abuja</option>
              <option value="2019">Kano</option>
            </select>
          </div>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="button"  onClick={submitHandler}>
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

export default Profile;
