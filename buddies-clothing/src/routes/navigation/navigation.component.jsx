import { Fragment } from 'react';

import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return(
      <Fragment>
        <div className='navigation'>
            <div className='nav-links-div'>
                <Link className='logo-div' to='/'>
                    <div>Logo</div>
                </Link>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;