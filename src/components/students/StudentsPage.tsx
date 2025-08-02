import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { EyeIcon } from '@heroicons/react/24/outline'
import type { Student } from '../../types'

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    class: 'Class 5',
    schoolId: '1',
    enrollmentDate: '2024-01-15',
    performance: {
      accuracyPercentage: 88,
      lessonsCompleted: 45,
      timeSpentMinutes: 1250,
      xpPoints: 2840,
      skillAreas: {
        vocabulary: 85,
        grammar: 90,
        pronunciation: 88,
        listening: 92,
        speaking: 84
      }
    }
  },
  {
    id: '2',
    name: 'Sarah Chen',
    class: 'Class 4',
    schoolId: '1',
    enrollmentDate: '2024-01-20',
    performance: {
      accuracyPercentage: 92,
      lessonsCompleted: 52,
      timeSpentMinutes: 1580,
      xpPoints: 3240,
      skillAreas: {
        vocabulary: 94,
        grammar: 91,
        pronunciation: 89,
        listening: 95,
        speaking: 90
      }
    }
  },
  {
    id: '3',
    name: 'Marcus Williams',
    class: 'Class 3',
    schoolId: '2',
    enrollmentDate: '2024-02-05',
    performance: {
      accuracyPercentage: 76,
      lessonsCompleted: 32,
      timeSpentMinutes: 890,
      xpPoints: 1920,
      skillAreas: {
        vocabulary: 78,
        grammar: 75,
        pronunciation: 74,
        listening: 80,
        speaking: 72
      }
    }
  }
]

export function StudentsPage() {
  const [students] = useState<Student[]>(mockStudents)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getPerformanceColor = (score: number) => {
    if (score >= 85) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Students Management</h1>
      </div>

      {/* Search */}
      <Card>
        <CardContent>
          <Input
            placeholder="Search students by name or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">All Students ({filteredStudents.length})</CardTitle>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Complete list of enrolled students with performance metrics</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Accuracy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lessons
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    XP Points
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">
                          Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.class}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getPerformanceColor(student.performance.accuracyPercentage)}`}>
                        {student.performance.accuracyPercentage}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.performance.lessonsCompleted}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.performance.xpPoints.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedStudent(student)}
                      >
                        <EyeIcon className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedStudent.name}</h2>
              <Button variant="outline" onClick={() => setSelectedStudent(null)} className="w-full sm:w-auto">
                Close
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Basic Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Class</p>
                      <p className="text-sm text-gray-900">{selectedStudent.class}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Enrollment Date</p>
                      <p className="text-sm text-gray-900">
                        {new Date(selectedStudent.enrollmentDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Time Spent</p>
                      <p className="text-sm text-gray-900">
                        {Math.round(selectedStudent.performance.timeSpentMinutes / 60)} hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Overall Accuracy</p>
                      <p className={`text-lg font-semibold ${getPerformanceColor(selectedStudent.performance.accuracyPercentage)}`}>
                        {selectedStudent.performance.accuracyPercentage}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Lessons Completed</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedStudent.performance.lessonsCompleted}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">XP Points</p>
                      <p className="text-lg font-semibold text-primary-600">
                        {selectedStudent.performance.xpPoints.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skill Areas */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Skill Areas Performance</CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Individual performance across different language skills</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {Object.entries(selectedStudent.performance.skillAreas).map(([skill, score]) => (
                      <div key={skill} className="text-center">
                        <div className="mb-2">
                          <div className={`text-2xl font-bold ${getPerformanceColor(score)}`}>
                            {score}%
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-700 capitalize">
                          {skill}
                        </p>
                      </div>
                    ))}
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
