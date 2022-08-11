import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as BuddiesLogo } from '../../assets/logo.svg';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>
                  SIGN OUT
                </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
          )}

          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  

  export default Navigation;