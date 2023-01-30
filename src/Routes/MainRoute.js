import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PageForgetPassword from '../Pages/PageForgetPassword/PageForgetPassword';
import PageResetPassword from '../Pages/PageResetPassword/PageResetPassword';
import PageSendMail from '../Pages/PageSendMail/PageSendMail';
import PageChangePassword from '../Pages/PageChangePassword/PageChangePassword';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from '../Pages/Login/Login.js';
import User from '../Pages/User/User';
import Group from '../Pages/Group/Group';
import Lot from '../Pages/Lot/Lot';
import Document from '../Pages/Document/Document';
import Cgu from '../Pages/Cgu/Cgu';
import Confidentiality from '../Pages/Confidentiality/Confidentiality';
const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/ForgetPassword' component={PageForgetPassword} />
        <Route exact path='/forgetpassword/SendMail' component={PageSendMail} />
        <Route exact path='/ResetPassword/:id' component={PageResetPassword} />
        <Route
          exact
          path='/changePassword/:id'
          component={PageChangePassword}
        />
        <PrivateRoute exact path='/' component={Group} />
        <PrivateRoute exact path='/user' component={User} />
        <PrivateRoute exact path='/lot' component={Lot} />
        <PrivateRoute exact path='/document' component={Document} />
        <PrivateRoute exact path='/cgu' component={Cgu} />
        <PrivateRoute
          exact
          path='/confidentiality'
          component={Confidentiality}
        />
      </Switch>
    </Router>
  );
};

export default MainRoute;
