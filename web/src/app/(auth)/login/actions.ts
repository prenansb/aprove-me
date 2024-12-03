'use server'

import { redirect } from 'next/navigation'
import { authenticate } from '@/http/server/api'
import { createSession, deleteSession } from '@/lib/session'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function login({ login, password }: { login: string; password: string }) {
  const jwt = await authenticate({ login, password })

  if (!jwt) {
    throw new Error('Login failed')
  }

  await sleep(2000)

  createSession(jwt.token)
  redirect('/dashboard')
}

export async function logout() {
  deleteSession()
  redirect('/login')
}
