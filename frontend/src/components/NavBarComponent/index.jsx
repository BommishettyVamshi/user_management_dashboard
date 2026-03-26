import { FaUserFriends } from "react-icons/fa";

import "./index.css";

const NavBarComponent = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className='navbar-content'>
          <div className='user-icon-card'>
            <FaUserFriends className='user-icon' />
          </div>
          <h1 className='navbar-title'>User Directory</h1>
        </div>
        <strong className='navbar-para'>Manage and view user information</strong>
      </div>
    </nav>
  );
};
export default NavBarComponent;
