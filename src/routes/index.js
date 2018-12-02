import Login from '../views/Login/Login';
import About from '../views/About';
import Dashboard from '../layouts/Dashboard/Dashboard';

const indexRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About Us',
    component: About
  },
  {
    path: '/control',
    name: 'Control',
    component: Dashboard
  }
];

export default indexRoutes;