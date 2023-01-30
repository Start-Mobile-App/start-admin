import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SideBarOrganism } from '../../Organisms';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, open, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.token ? (
        <div className='page'>
          <SideBarOrganism />
          <div className={open ? 'container_page' : 'container_page_open'}>
            <Component {...props} />
          </div>
        </div>
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  open: state.sideBar.open,
  auth: state.auth
});
export default connect(mapStateToProps, null)(PrivateRoute);
