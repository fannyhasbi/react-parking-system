import Scan from '../views/Scan/Scan';
import Parkir from '../views/Parkir/Parkir';
import MonthlyData from '../views/MonthlyData/MonthlyData';

var dashboardRoutes = [
  {
    path: '/control/scan',
    name: 'Scan QR',
    icon: 'shopping_delivery-fast',
    component: Scan
  },
  {
    path: '/control/realtime',
    name: 'Realtime Data',
    icon: 'tech_watch-time',
    component: Parkir
  },
  {
    path: '/control/data-parkir',
    name: 'Data Parkir Bulanan',
    icon: 'files_paper',
    component: MonthlyData
  }
];

export default dashboardRoutes;