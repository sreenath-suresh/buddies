import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as BuddiesLogo } from '../../assets/logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return(
      <Fragment>
        <div className='navigation'>
            <div className='nav-links-div'>
                <Link className='logo-div' to='/'>
                    <BuddiesLogo />
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