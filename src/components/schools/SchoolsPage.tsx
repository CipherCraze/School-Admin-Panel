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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Schools Management</h1>
        <Button onClick={() => setShowAddForm(true)}>
          <PlusIcon className="w-5 h-5 mr-2" />
          Add New School
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search schools by name or board..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSchools.map((school) => (
          <Card key={school.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{school.name}</CardTitle>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  school.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {school.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Board</p>
                  <p className="text-sm text-gray-900">{school.board}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Admin Contact</p>
                  <p className="text-sm text-gray-900">{school.adminContact.name}</p>
                  <p className="text-xs text-gray-500">{school.adminContact.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Students</p>
                  <p className="text-lg font-semibold text-gray-900">{school.totalStudents}</p>
                </div>
                <div className="flex items-center space-x-2 pt-4">
                  <Button size="sm" variant="outline">
                    <EyeIcon className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New School</h2>
            <div className="space-y-4">
              <Input label="School Name" placeholder="Enter school name" />
              <Input label="Board" placeholder="CBSE, ICSE, State Board, etc." />
              <Input label="Admin Name" placeholder="Enter admin name" />
              <Input label="Admin Email" type="email" placeholder="admin@school.edu" />
              <Input label="Admin Phone" placeholder="+1-555-0123" />
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowAddForm(false)}>
                Add School
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
