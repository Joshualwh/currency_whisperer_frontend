import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CWLogo} from "../../assets/currency-whisperer-high-resolution-logo-transparent.svg";

import "./navigation.styles.scss";

const Navigation = () => {

  const [currencyDropdownVisible, setCurrencyDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const handleCurrencyMouseEnter = () => {
    setCurrencyDropdownVisible(true);
  };
  const handleCurrencyMouseLeave = () => {
    setCurrencyDropdownVisible(false);
  };

  const handleProfileMouseEnter = () => {
    setProfileDropdownVisible(true);
  };
  const handleProfileMouseLeave = () => {
    setProfileDropdownVisible(false);
  };

  return (
    <Fragment>
      <span className="nav-bar-container">
        <div className="nav-bar-left">
          <Link className="logo-container" to='/'><CWLogo className="logo"/></Link>
          <div className="nav-component" onMouseEnter={handleCurrencyMouseEnter} onMouseLeave={handleCurrencyMouseLeave}>
            <h3>Currency Conversion</h3>
            {currencyDropdownVisible && (
              <div>
                <ul>
                  <Link className="nav-component-link" to='/'><li>All</li></Link>
                  <Link className="nav-component-link" to='/subscription'><li>Subscribed</li></Link>
                </ul>
              </div>
            )}
          </div>
          <div className="nav-component"><h3>Money Changer</h3></div>
        </div>
        <div className="nav-bar-right">
          <div className="nav-component" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
            <h3>User Profile</h3>
            {profileDropdownVisible && (
              <div>
                <ul>
                  <Link className="nav-component-link" to='/'><li>Settings</li></Link>
                  <Link className="nav-component-link" to='/subscription'><li>Sign Out</li></Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </span>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;

{/* <div className="nav-component">
  <Link className="nav-component-link" to='/authentication'><h3>User Profile</h3></Link>
</div> */}

// https://medium.com/how-to-react/how-to-create-a-dropdown-menu-on-hover-in-react-js-without-any-package-b16b2f76db71÷