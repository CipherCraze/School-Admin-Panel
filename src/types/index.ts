export interface School {
  id: string
  name: string
  board: string
  adminContact: {
    name: string
    email: string
    phone: string
  }
  totalStudents: number
  createdAt: string
  status: 'active' | 'inactive'
}

export interface Student {
  id: string
  name: string
  class: string
  schoolId: string
  enrollmentDate: string
  performance: {
    accuracyPercentage: number
    lessonsCompleted: number
    timeSpentMinutes: number
    xpPoints: number
    skillAreas: {
      vocabulary: number
      grammar: number
      pronunciation: number
      listening: number
      speaking: number
    }
  }
}

export interface DashboardStats {
  totalSchools: number
  totalStudents: number
  activeSchools: number
  averageAccuracy: number
}

export interface User {
  id: string
  email: string
  name: string
  role: 'super_admin' | 'school_admin'
  schoolId?: string
}
