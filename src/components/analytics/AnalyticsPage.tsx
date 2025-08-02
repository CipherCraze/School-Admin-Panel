import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

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

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Learning Hours</p>
                <p className="text-3xl font-bold text-gray-900">2,847</p>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Lessons Completed</p>
                <p className="text-3xl font-bold text-gray-900">1,892</p>
                <p className="text-sm text-green-600">+18% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Session Time</p>
                <p className="text-3xl font-bold text-gray-900">24 min</p>
                <p className="text-sm text-green-600">+8% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Students</p>
                <p className="text-3xl font-bold text-gray-900">1,156</p>
                <p className="text-sm text-green-600">+5% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Student Performance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
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
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Areas Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Average Performance by Skill Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillAnalytics.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                    <span className="text-sm font-bold text-gray-900">{skill.average}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out"
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
            <div className="mt-8">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={skillAnalytics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="skill" 
                    stroke="#64748b" 
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    domain={[0, 100]} 
                    stroke="#64748b" 
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`${value}%`, 'Average Score']}
                  />
                  <Bar 
                    dataKey="average" 
                    radius={[4, 4, 0, 0]}
                    name="Average Score"
                  >
                    {skillAnalytics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 bg-secondary-50 rounded-xl">
              <h4 className="text-sm font-semibold text-secondary-800 mb-3">Month-over-Month Improvement</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillAnalytics.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border border-secondary-200">
                    <span className="text-sm font-medium text-secondary-700">{skill.skill}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-success-600">+{skill.improvement}%</span>
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
          <CardTitle>Student Engagement Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="avgTime" fill="#3b82f6" name="Avg. Time (minutes)" />
              <Bar yAxisId="right" dataKey="lessons" fill="#10b981" name="Lessons Completed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Performing Schools */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Schools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Riverside High School', accuracy: 92, students: 456, improvement: '+5%' },
              { name: 'Greenwood Elementary', accuracy: 89, students: 245, improvement: '+8%' },
              { name: 'Sunnydale Academy', accuracy: 87, students: 189, improvement: '+12%' },
              { name: 'Oakwood International', accuracy: 85, students: 312, improvement: '+3%' },
              { name: 'Pine Valley School', accuracy: 83, students: 278, improvement: '+7%' }
            ].map((school, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-primary-700">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{school.name}</p>
                    <p className="text-sm text-gray-500">{school.students} students</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{school.accuracy}% accuracy</p>
                  <p className="text-sm text-green-600">{school.improvement}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
