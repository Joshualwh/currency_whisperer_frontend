import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CWLogo} from "../../assets/currency-whisperer-high-resolution-logo-transparent.svg";

import "./navigation.styles.scss";

const Navigation = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <Fragment>
      <span className="nav-bar-container">
        <div className="nav-bar-left">
          <Link className="logo-container" to='/'><CWLogo className="logo"/></Link>
          <div className="nav-component" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h3>Currency Conversion</h3>
            {isDropdownVisible && (
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
          <div className="nav-component">
            <Link className="nav-component-link" to='/authentication'><h3>User Profile</h3></Link>
          </div>
        </div>
      </span>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;

// https://medium.com/how-to-react/how-to-create-a-dropdown-menu-on-hover-in-react-js-without-any-package-b16b2f76db71÷