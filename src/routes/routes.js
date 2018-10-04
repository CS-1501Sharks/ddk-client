import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import Users from '@/pages/Users.vue'
import Schedule from '@/pages/Schedule.vue'
import Catalog from '@/pages/Catalog.vue'
import TableList from '@/pages/TableList.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'schedule',
        name: 'Schedule',
        component: Schedule
      },
      {
        path: 'catalog',
        name: 'Catalog',
        component: Catalog
      },
      {
        path: 'users',
        name: 'Users',
        component: Users
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: UpgradeToPRO
      }
    ]
  }
]

export default routes
