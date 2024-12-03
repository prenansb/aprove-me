'use server'

import { setTimeout } from 'timers/promises'
import { redirect } from 'next/navigation'
import { authenticate } from '@/http/server/api'
import { createSession, deleteSession } from '@/lib/session'

export async function login({ login, password }: { login: string; password: string }) {
  await setTimeout(1500)
  const auth = await authenticate({ login, password })

  createSession(auth.token)
}

export async function logout() {
  deleteSession()
  redirect('/login')
}
