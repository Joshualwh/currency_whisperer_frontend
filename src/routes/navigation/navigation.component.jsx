import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <div>
          <Link to='/'>
            <h1>Currency Whisperer</h1>
          </Link>
          <label>
            Subscription
            <select name="" id="">
              <option value="">All</option>
              <option value="">Subscribed</option>
            </select>
          </label>
          <h2>Money Changer</h2>
        </div>
        <div>
          <h2>User Profile</h2>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;