import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { LoginPage } from './components/auth/LoginPage'
import { Layout } from './components/layout/Layout'
import { SchoolsPage } from './components/schools/SchoolsPage'
import { StudentsPage } from './components/students/StudentsPage'
import { AnalyticsPage } from './components/analytics/AnalyticsPage'
import { SettingsPage } from './components/settings/SettingsPage'
import { LeaderboardPage } from './components/leaderboard/LeaderboardPage'
import { RoleBasedDashboard } from './components/dashboard/RoleBasedDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Layout>
                  <Routes>
                    <Route path="/" element={<RoleBasedDashboard />} />
                    <Route path="/schools" element={<SchoolsPage />} />
                    <Route path="/students" element={<StudentsPage />} />
                    <Route path="/leaderboard" element={<LeaderboardPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
