import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { 
  HomeIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Schools', href: '/schools', icon: AcademicCapIcon },
    { name: 'Students', href: '/students', icon: UserGroupIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white/80 backdrop-blur-xl border-r border-secondary-200/50 shadow-large">
        <div className="flex h-20 items-center justify-center border-b border-secondary-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl flex items-center justify-center">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">SpeakGenie</h1>
              <p className="text-xs text-secondary-500 font-medium">Admin Panel</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-8 px-6">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg'
                        : 'text-secondary-700 hover:bg-secondary-100/80 hover:text-secondary-900'
                    }`
                  }
                >
                  <item.icon className="mr-3 h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-secondary-200/50 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center shadow-md">
                <span className="text-sm font-bold text-white">
                  {user?.name.charAt(0)}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-secondary-900">{user?.name}</p>
                <p className="text-xs text-secondary-500 capitalize">{user?.role.replace('_', ' ')}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-secondary-400 hover:text-error-600 transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-error-50"
              title="Logout"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-72">
        <main className="py-8 animate-fade-in">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
