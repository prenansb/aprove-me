'use client'

import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { authControllerLogin } from '@/http/client/api'
import { isTokenValid } from '@/utils/is-token-valid'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken && isTokenValid(storedToken)) {
      setToken(storedToken)
      setUser(jwtDecode(storedToken))
    } else {
      localStorage.removeItem('token')
      setToken(null)
      setUser(null)
    }
  }, [])

  const login = async ({ login, password }: { login: string; password: string }) => {
    const token = await authControllerLogin({ login, password })

    if (!token) {
      throw new Error('Login failed')
    }

    if (token && isTokenValid(token)) {
      localStorage.setItem('token', token)
      setToken(token)
      setUser(jwtDecode(token))
      router.push('/dashboard')
    } else {
      throw new Error('Invalid token received')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isTokenValid }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
