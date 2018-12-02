import Parkir from '../views/Parkir/Parkir';
import MonthlyData from '../views/MonthlyData/MonthlyData';

var dashboardRoutes = [
  {
    path: '/control/realtime',
    name: 'Realtime Data',
    component: Parkir
  },
  {
    path: '/control/data-parkir',
    name: 'Data Parkir Bulanan',
    component: MonthlyData
  }
];

export default dashboardRoutes;