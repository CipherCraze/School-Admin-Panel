import { useAuth } from '../../contexts/AuthContext'
import { DashboardPage } from './DashboardPage'
import { SchoolAdminDashboard } from '../school-admin/SchoolAdminDashboard'

export function RoleBasedDashboard() {
  const { user } = useAuth()
  
  if (!user) {
    return null
  }

  // Route based on user role
  if (user.role === 'super_admin') {
    return <DashboardPage />
  } else if (user.role === 'school_admin') {
    return <SchoolAdminDashboard />
  }

  // Default fallback
  return <DashboardPage />
}
