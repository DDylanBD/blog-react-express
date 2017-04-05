import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';


const routes = {
  components : Base,
  childRoutes: [
    {
      path : '/',
      getComponent : (location, callback) => {
        if(Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },
    {
      path : '/login',
      components : LoginPage
    },
    {
      path : '/signup',
      components : SignUpPage
    },
    {
      path : '/logout',
      onEnter : (nextState, replace) => {
        Auth.deauthenticateUser();

        replace('/');
      }
    }
  ]
};
export default routes;
