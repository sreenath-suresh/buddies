import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as BuddiesLogo } from '../../assets/logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-div' to='/'>
            <BuddiesLogo className='logo' />
          </Link>
          <div className='nav-links-div'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  


  export default Navigation;