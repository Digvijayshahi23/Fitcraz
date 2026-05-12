import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for persisted session
    const savedUser = localStorage.getItem('fitcraz_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    const mockUser = { email, name: 'Elite Athlete', id: '12345' }
    setUser(mockUser)
    localStorage.setItem('fitcraz_user', JSON.stringify(mockUser))
    setLoading(false)
    return true
  }

  const signup = async (data) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    const mockUser = { email: data.email, name: data.name, id: '12345' }
    setUser(mockUser)
    localStorage.setItem('fitcraz_user', JSON.stringify(mockUser))
    setLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('fitcraz_user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
