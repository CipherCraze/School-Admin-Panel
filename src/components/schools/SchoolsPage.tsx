import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { PlusIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline'
import type { School } from '../../types'

const mockSchools: School[] = [
  {
    id: '1',
    name: 'Greenwood Elementary',
    board: 'CBSE',
    adminContact: {
      name: 'Sarah Johnson',
      email: 'sarah@greenwood.edu',
      phone: '+1-555-0123'
    },
    totalStudents: 245,
    createdAt: '2024-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Riverside High School',
    board: 'ICSE',
    adminContact: {
      name: 'Michael Chen',
      email: 'michael@riverside.edu',
      phone: '+1-555-0124'
    },
    totalStudents: 456,
    createdAt: '2024-02-20',
    status: 'active'
  },
  {
    id: '3',
    name: 'Sunnydale Academy',
    board: 'State Board',
    adminContact: {
      name: 'Emily Davis',
      email: 'emily@sunnydale.edu',
      phone: '+1-555-0125'
    },
    totalStudents: 189,
    createdAt: '2024-03-10',
    status: 'inactive'
  }
]

export function SchoolsPage() {
  const [schools] = useState<School[]>(mockSchools)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.board.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Schools Management</h1>
        <Button onClick={() => setShowAddForm(true)} className="w-full sm:w-auto">
          <PlusIcon className="w-5 h-5 mr-2" />
          Add New School
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search schools by name or board..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="w-full sm:w-auto">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSchools.map((school) => (
          <Card key={school.id}>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base sm:text-lg pr-2">{school.name}</CardTitle>
                <span className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                  school.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {school.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">Board</p>
                  <p className="text-sm text-gray-900">{school.board}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">Admin Contact</p>
                  <p className="text-sm text-gray-900">{school.adminContact.name}</p>
                  <p className="text-xs text-gray-500 truncate">{school.adminContact.email}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">Total Students</p>
                  <p className="text-lg font-semibold text-gray-900">{school.totalStudents}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full sm:w-auto"
                    onClick={() => setSelectedSchool(school)}
                  >
                    <EyeIcon className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="w-full sm:w-auto">
                    <PencilIcon className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add School Modal - Simplified for demo */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Add New School</h2>
            <div className="space-y-4">
              <Input label="School Name" placeholder="Enter school name" />
              <Input label="Board" placeholder="CBSE, ICSE, State Board, etc." />
              <Input label="Admin Name" placeholder="Enter admin name" />
              <Input label="Admin Email" type="email" placeholder="admin@school.edu" />
              <Input label="Admin Phone" placeholder="+1-555-0123" />
            </div>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 mt-6">
              <Button variant="outline" onClick={() => setShowAddForm(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button onClick={() => setShowAddForm(false)} className="w-full sm:w-auto">
                Add School
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* School Detail Modal */}
      {selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedSchool.name}</h2>
              <Button variant="outline" onClick={() => setSelectedSchool(null)} className="w-full sm:w-auto">
                Close
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Basic School Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">School Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">School Name</p>
                      <p className="text-sm text-gray-900">{selectedSchool.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Board</p>
                      <p className="text-sm text-gray-900">{selectedSchool.board}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Status</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        selectedSchool.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedSchool.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Created Date</p>
                      <p className="text-sm text-gray-900">
                        {new Date(selectedSchool.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Admin Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Admin Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-sm text-gray-900">{selectedSchool.adminContact.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-sm text-gray-900">{selectedSchool.adminContact.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-sm text-gray-900">{selectedSchool.adminContact.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* School Statistics */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">School Statistics</CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Overview of school performance and enrollment</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{selectedSchool.totalStudents}</div>
                      <p className="text-sm font-medium text-blue-800">Total Students</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round(selectedSchool.totalStudents / 8)}
                      </div>
                      <p className="text-sm font-medium text-green-800">Avg per Class</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">85%</div>
                      <p className="text-sm font-medium text-purple-800">Avg Performance</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">8</div>
                      <p className="text-sm font-medium text-amber-800">Active Classes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Recent Activity</CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Latest updates and activities for this school</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">New student enrollment</p>
                        <p className="text-xs text-gray-500">15 new students enrolled this month</p>
                      </div>
                      <span className="text-xs text-gray-400">2 days ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Performance update</p>
                        <p className="text-xs text-gray-500">Monthly performance reports generated</p>
                      </div>
                      <span className="text-xs text-gray-400">1 week ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Admin contact updated</p>
                        <p className="text-xs text-gray-500">Contact information verified and updated</p>
                      </div>
                      <span className="text-xs text-gray-400">2 weeks ago</span>
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
