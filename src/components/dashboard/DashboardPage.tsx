import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { AcademicCapIcon, UserGroupIcon, ChartBarIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const mockData = {
  stats: {
    totalSchools: 25,
    totalStudents: 1250,
    activeSchools: 23,
    averageAccuracy: 85.2
  },
  enrollmentTrend: [
    { month: 'Jan', students: 800 },
    { month: 'Feb', students: 920 },
    { month: 'Mar', students: 1050 },
    { month: 'Apr', students: 1180 },
    { month: 'May', students: 1250 }
  ],
  performanceByClass: [
    { class: 'Class 1', accuracy: 82 },
    { class: 'Class 2', accuracy: 85 },
    { class: 'Class 3', accuracy: 88 },
    { class: 'Class 4', accuracy: 84 },
    { class: 'Class 5', accuracy: 86 }
  ]
}

export function DashboardPage() {
  const statCards = [
    {
      title: 'Total Schools',
      value: mockData.stats.totalSchools,
      icon: AcademicCapIcon,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      change: '+12%',
      changeType: 'increase'
    },
    {
      title: 'Total Students',
      value: mockData.stats.totalStudents.toLocaleString(),
      icon: UserGroupIcon,
      color: 'from-emerald-600 to-emerald-700',
      bgColor: 'from-emerald-50 to-emerald-100',
      change: '+18%',
      changeType: 'increase'
    },
    {
      title: 'Active Schools',
      value: mockData.stats.activeSchools,
      icon: ChartBarIcon,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100',
      change: '+5%',
      changeType: 'increase'
    },
    {
      title: 'Avg. Accuracy',
      value: `${mockData.stats.averageAccuracy}%`,
      icon: TrophyIcon,
      color: 'from-amber-600 to-amber-700',
      bgColor: 'from-amber-50 to-amber-100',
      change: '+3%',
      changeType: 'increase'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
          <p className="mt-2 text-secondary-600">Welcome back! Here's what's happening with your schools.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="text-sm text-secondary-500 bg-white/80 px-4 py-2 rounded-xl backdrop-blur-sm border border-secondary-200">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Card key={index} hover className="overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-secondary-600 uppercase tracking-wide">{stat.title}</p>
                  <p className="text-3xl font-bold text-secondary-900 mt-2">{stat.value}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm font-medium text-success-600">{stat.change}</span>
                    <span className="text-xs text-secondary-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.bgColor} rounded-xl opacity-20`}></div>
                  <div className={`relative w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Enrollment Trend */}
        <Card className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle gradient>Student Enrollment Trend</CardTitle>
            <p className="text-sm text-secondary-600">Monthly growth in student registrations</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={mockData.enrollmentTrend}>
                <defs>
                  <linearGradient id="enrollmentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="students" 
                  stroke="#0ea5e9" 
                  strokeWidth={3}
                  fill="url(#enrollmentGradient)"
                  dot={{ fill: '#0ea5e9', strokeWidth: 3, r: 6 }}
                  activeDot={{ r: 8, fill: '#0284c7' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance by Class */}
        <Card className="animate-slide-up" style={{ animationDelay: '500ms' }}>
          <CardHeader>
            <CardTitle gradient>Average Accuracy by Class</CardTitle>
            <p className="text-sm text-secondary-600">Performance metrics across different grade levels</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={mockData.performanceByClass}>
                <defs>
                  <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="class" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar 
                  dataKey="accuracy" 
                  fill="url(#performanceGradient)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="animate-slide-up" style={{ animationDelay: '600ms' }}>
        <CardHeader>
          <CardTitle gradient>Recent Activity</CardTitle>
          <p className="text-sm text-secondary-600">Latest updates and notifications</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'New school registered', details: 'Greenwood Elementary School', time: '2 hours ago', type: 'school' },
              { action: 'Student enrollment milestone', details: '1,250 total students reached', time: '4 hours ago', type: 'milestone' },
              { action: 'Performance report generated', details: 'Monthly accuracy report for March', time: '1 day ago', type: 'report' },
              { action: 'New admin user created', details: 'admin@bluehills.edu', time: '2 days ago', type: 'user' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-4 px-4 rounded-xl bg-secondary-50/50 border border-secondary-100 hover:bg-secondary-50 transition-colors duration-200">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${
                    activity.type === 'school' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'milestone' ? 'bg-emerald-100 text-emerald-600' :
                    activity.type === 'report' ? 'bg-purple-100 text-purple-600' :
                    'bg-amber-100 text-amber-600'
                  }`}>
                    {activity.type === 'school' ? <AcademicCapIcon className="w-5 h-5" /> :
                     activity.type === 'milestone' ? <TrophyIcon className="w-5 h-5" /> :
                     activity.type === 'report' ? <ChartBarIcon className="w-5 h-5" /> :
                     <UserGroupIcon className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary-900">{activity.action}</p>
                    <p className="text-sm text-secondary-600">{activity.details}</p>
                  </div>
                </div>
                <span className="text-xs text-secondary-400 bg-white px-3 py-1 rounded-full">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
