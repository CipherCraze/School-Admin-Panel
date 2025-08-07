import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { Button } from '../ui/Button'
import { EyeIcon, TrophyIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'

const performanceData = [
  { name: 'Excellent (85-100%)', value: 35, color: '#10b981' },
  { name: 'Good (70-84%)', value: 45, color: '#f59e0b' },
  { name: 'Needs Improvement (<70%)', value: 20, color: '#ef4444' }
]

const skillAnalytics = [
  { skill: 'Vocabulary', average: 82, improvement: 5, color: '#3b82f6' },
  { skill: 'Grammar', average: 78, improvement: 8, color: '#10b981' },
  { skill: 'Pronunciation', average: 76, improvement: 12, color: '#f59e0b' },
  { skill: 'Listening', average: 85, improvement: 3, color: '#8b5cf6' },
  { skill: 'Speaking', average: 74, improvement: 15, color: '#ef4444' }
]

const engagementData = [
  { month: 'Jan', avgTime: 45, lessons: 12 },
  { month: 'Feb', avgTime: 52, lessons: 15 },
  { month: 'Mar', avgTime: 48, lessons: 18 },
  { month: 'Apr', avgTime: 55, lessons: 20 },
  { month: 'May', avgTime: 58, lessons: 22 }
]

// Enhanced data for top performing schools with more details
const topPerformingSchools = [
  { 
    id: '1',
    name: 'Bright Future International',
    board: 'IB',
    accuracy: 94.2,
    students: 312,
    activeStudents: 298,
    improvement: '+8%',
    region: 'Pune',
    totalLessons: 2847,
    avgSessionTime: '28 min',
    adminContact: 'david@brightfuture.edu',
    rank: 1,
    badges: ['🏆', '⭐', '🔥']
  },
  { 
    id: '2',
    name: 'Riverside High School',
    board: 'ICSE',
    accuracy: 92.5,
    students: 456,
    activeStudents: 423,
    improvement: '+5%',
    region: 'South Mumbai',
    totalLessons: 4234,
    avgSessionTime: '26 min',
    adminContact: 'michael@riverside.edu',
    rank: 2,
    badges: ['🥈', '💎']
  },
  { 
    id: '3',
    name: 'Greenwood Elementary',
    board: 'CBSE',
    accuracy: 89.7,
    students: 245,
    activeStudents: 238,
    improvement: '+12%',
    region: 'North Delhi',
    totalLessons: 1892,
    avgSessionTime: '24 min',
    adminContact: 'sarah@greenwood.edu',
    rank: 3,
    badges: ['🥉', '📈']
  },
  { 
    id: '4',
    name: 'Knowledge Heights School',
    board: 'CBSE',
    accuracy: 87.4,
    students: 189,
    activeStudents: 176,
    improvement: '+15%',
    region: 'Hyderabad',
    totalLessons: 1567,
    avgSessionTime: '22 min',
    adminContact: 'priya@knowledgeheights.edu',
    rank: 4,
    badges: ['🌟']
  },
  { 
    id: '5',
    name: 'Oakwood International',
    board: 'Cambridge',
    accuracy: 85.8,
    students: 278,
    activeStudents: 251,
    improvement: '+3%',
    region: 'Bangalore',
    totalLessons: 2156,
    avgSessionTime: '25 min',
    adminContact: 'admin@oakwood.edu',
    rank: 5,
    badges: ['⭐']
  },
  { 
    id: '6',
    name: 'Pine Valley School',
    board: 'State Board',
    accuracy: 83.9,
    students: 198,
    activeStudents: 187,
    improvement: '+7%',
    region: 'Chennai',
    totalLessons: 1423,
    avgSessionTime: '21 min',
    adminContact: 'contact@pinevalley.edu',
    rank: 6,
    badges: ['📚']
  }
]

export function AnalyticsPage() {
  const { user } = useAuth()
  const [selectedSchool, setSelectedSchool] = useState<any>(null)
  const isSuperAdmin = user?.role === 'super_admin'
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Analytics & Reports</h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Total Learning Hours</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">2,847</p>
                <p className="text-xs sm:text-sm text-green-600">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Lessons Completed</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">1,892</p>
                <p className="text-xs sm:text-sm text-green-600">+18% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Average Session Time</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">24 min</p>
                <p className="text-xs sm:text-sm text-green-600">+8% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Active Students</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">1,156</p>
                <p className="text-xs sm:text-sm text-green-600">+5% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Student Performance Distribution</CardTitle>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Overall accuracy breakdown across all students</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {performanceData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Areas Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Average Performance by Skill Area</CardTitle>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Individual skill performance metrics and improvements</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {skillAnalytics.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{skill.skill}</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 flex-shrink-0">{skill.average}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 relative overflow-hidden">
                    <div 
                      className="h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.average}%`,
                        background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color}aa)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Alternative: Simple Bar Chart */}
            <div className="mt-6 sm:mt-8">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={skillAnalytics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="skill" 
                    stroke="#64748b" 
                    fontSize={10}
                    angle={-45}
                    textAnchor="end"
                    height={50}
                  />
                  <YAxis 
                    domain={[0, 100]} 
                    stroke="#64748b" 
                    fontSize={10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      fontSize: '12px'
                    }}
                    formatter={(value) => [`${value}%`, 'Average Score']}
                  />
                  <Bar 
                    dataKey="average" 
                    radius={[3, 3, 0, 0]}
                    name="Average Score"
                  >
                    {skillAnalytics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-secondary-50 rounded-xl">
              <h4 className="text-xs sm:text-sm font-semibold text-secondary-800 mb-3">Month-over-Month Improvement</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillAnalytics.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg border border-secondary-200">
                    <span className="text-xs sm:text-sm font-medium text-secondary-700">{skill.skill}</span>
                    <div className="flex items-center">
                      <span className="text-xs sm:text-sm font-bold text-success-600">+{skill.improvement}%</span>
                      <div className="ml-2 w-2 h-2 bg-success-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Student Engagement Trends</CardTitle>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Monthly engagement patterns and learning time</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={10} />
              <YAxis yAxisId="left" stroke="#64748b" fontSize={10} />
              <YAxis yAxisId="right" orientation="right" stroke="#64748b" fontSize={10} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  fontSize: '12px'
                }}
              />
              <Bar yAxisId="left" dataKey="avgTime" fill="#3b82f6" name="Avg. Time (minutes)" radius={[2, 2, 0, 0]} />
              <Bar yAxisId="right" dataKey="lessons" fill="#10b981" name="Lessons Completed" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Performing Schools - Super Admin Only */}
      {isSuperAdmin && (
        <Card className="animate-slide-up" style={{ animationDelay: '700ms' }}>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div>
                <CardTitle className="text-lg sm:text-xl flex items-center">
                  <TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-500" />
                  Top Performing Schools
                </CardTitle>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Schools ranked by overall student accuracy and engagement</p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 bg-amber-50 px-3 py-1 rounded-full">
                Super Admin Only
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {topPerformingSchools.map((school, index) => (
                <div key={school.id} className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  index === 0 ? 'border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50' :
                  index === 1 ? 'border-gray-300 bg-gradient-to-r from-gray-50 to-slate-50' :
                  index === 2 ? 'border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50' :
                  'border-gray-200 bg-white hover:border-blue-200'
                }`}>
                  {/* Rank Badge */}
                  <div className={`absolute top-0 left-0 w-12 h-12 flex items-center justify-center text-white font-bold text-sm ${
                    index === 0 ? 'bg-gradient-to-br from-amber-400 to-yellow-500' :
                    index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                    index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                    'bg-gradient-to-br from-blue-400 to-blue-500'
                  }`}>
                    #{school.rank}
                  </div>

                  <div className="p-4 sm:p-6 ml-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      {/* School Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">{school.name}</h3>
                              <div className="flex space-x-1">
                                {school.badges.map((badge, idx) => (
                                  <span key={idx} className="text-sm">{badge}</span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                                {school.board}
                              </span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                📍 {school.region}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
                          <div className="text-center p-2 sm:p-3 bg-white/70 rounded-lg border border-gray-100">
                            <div className="text-lg sm:text-xl font-bold text-green-600">{school.accuracy}%</div>
                            <div className="text-xs text-gray-500">Accuracy</div>
                          </div>
                          <div className="text-center p-2 sm:p-3 bg-white/70 rounded-lg border border-gray-100">
                            <div className="text-lg sm:text-xl font-bold text-blue-600">{school.students}</div>
                            <div className="text-xs text-gray-500">Students</div>
                          </div>
                          <div className="text-center p-2 sm:p-3 bg-white/70 rounded-lg border border-gray-100">
                            <div className="text-lg sm:text-xl font-bold text-purple-600">{school.totalLessons}</div>
                            <div className="text-xs text-gray-500">Lessons</div>
                          </div>
                          <div className="text-center p-2 sm:p-3 bg-white/70 rounded-lg border border-gray-100">
                            <div className="text-lg sm:text-xl font-bold text-orange-600">{school.avgSessionTime}</div>
                            <div className="text-xs text-gray-500">Avg Time</div>
                          </div>
                        </div>

                        {/* Performance Indicators */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <UserGroupIcon className="w-4 h-4 text-gray-500" />
                              <span className="text-xs sm:text-sm text-gray-600">
                                {school.activeStudents}/{school.students} active
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="text-xs sm:text-sm font-medium text-green-600">{school.improvement}</span>
                              <span className="text-xs text-gray-500">improvement</span>
                            </div>
                          </div>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedSchool(school)}
                            className="w-full sm:w-auto"
                          >
                            <EyeIcon className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Summary */}
            <div className="mt-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h4 className="text-sm sm:text-base font-semibold text-blue-900 mb-3 flex items-center">
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                Network Performance Summary
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    {Math.round(topPerformingSchools.reduce((acc, school) => acc + school.accuracy, 0) / topPerformingSchools.length * 10) / 10}%
                  </div>
                  <div className="text-xs sm:text-sm text-blue-700">Network Average</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    {topPerformingSchools.reduce((acc, school) => acc + school.students, 0).toLocaleString()}
                  </div>
                  <div className="text-xs sm:text-sm text-green-700">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600">
                    {topPerformingSchools.reduce((acc, school) => acc + school.totalLessons, 0).toLocaleString()}
                  </div>
                  <div className="text-xs sm:text-sm text-purple-700">Total Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">
                    {topPerformingSchools.filter(school => school.activeStudents / school.students > 0.9).length}
                  </div>
                  <div className="text-xs sm:text-sm text-orange-700">High Engagement</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* School Detail Modal */}
      {selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                  <span className="mr-3">#{selectedSchool.rank}</span>
                  {selectedSchool.name}
                  <div className="flex space-x-1 ml-2">
                    {selectedSchool.badges.map((badge: string, idx: number) => (
                      <span key={idx} className="text-lg">{badge}</span>
                    ))}
                  </div>
                </h2>
                <p className="text-gray-600">{selectedSchool.board} • {selectedSchool.region}</p>
              </div>
              <Button variant="outline" onClick={() => setSelectedSchool(null)}>
                Close
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Overall Accuracy</p>
                      <p className="text-2xl font-bold text-green-600">{selectedSchool.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Monthly Improvement</p>
                      <p className="text-2xl font-bold text-blue-600">{selectedSchool.improvement}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Average Session Time</p>
                      <p className="text-2xl font-bold text-purple-600">{selectedSchool.avgSessionTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Student Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Student Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Students</p>
                      <p className="text-2xl font-bold text-blue-600">{selectedSchool.students}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Active Students</p>
                      <p className="text-2xl font-bold text-green-600">{selectedSchool.activeStudents}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Engagement Rate</p>
                      <p className="text-2xl font-bold text-orange-600">
                        {Math.round((selectedSchool.activeStudents / selectedSchool.students) * 100)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Learning Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Lessons</p>
                      <p className="text-2xl font-bold text-purple-600">{selectedSchool.totalLessons}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Admin Contact</p>
                      <p className="text-sm font-medium text-gray-900">{selectedSchool.adminContact}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Network Rank</p>
                      <p className="text-2xl font-bold text-amber-600">#{selectedSchool.rank}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
