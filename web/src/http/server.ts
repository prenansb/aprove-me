import { cookies } from 'next/headers'

function getBody<T>(c: Response | Request): Promise<T> {
  const contentType = c.headers.get('content-type')

  if (contentType?.includes('application/json')) {
    return c.json()
  }

  return c.text() as Promise<T>
}

async function getHeaders(options?: RequestInit): Promise<HeadersInit> {
  const headers = options?.headers

  const token = (await cookies()).get('session')?.value

  if (token) {
    return { ...headers, Authorization: `Bearer ${token}` }
  }

  return headers ?? {}
}

export async function http<T>(path: string, options: RequestInit): Promise<T> {
  const requestHeaders = await getHeaders(options)

  const url = new URL(path, process.env.NEXT_PUBLIC_API_URL)

  const request = new Request(url, {
    ...options,
    headers: requestHeaders,
  })

  const response = await fetch(request)

  if (response.ok) {
    const data = await getBody<T>(response)

    return data as T
  }

  return Promise.reject(response)
}
