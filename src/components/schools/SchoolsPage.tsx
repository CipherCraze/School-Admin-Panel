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
                  <Button size="sm" variant="outline" className="w-full sm:w-auto">
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
    </div>
  )
}
