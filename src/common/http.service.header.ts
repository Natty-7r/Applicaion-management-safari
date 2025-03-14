/* eslint-disable */
export default function createHeaders(token: string): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'X-Content-Type-Options': 'nosniff',
    'Content-Security-Policy': "default-src 'self'",
  }

  return headers
}
