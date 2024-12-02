import { jwtDecode } from 'jwt-decode'

export const isTokenValid = (token: string) => {
  try {
    const decoded = jwtDecode(token)
    const currentTime = Date.now() / 1000 // in seconds
    return decoded.exp ?? 0 > currentTime
  } catch (error) {
    return false
  }
}
