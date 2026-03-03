// API configuration
const API_BASE = import.meta.env.VITE_API_URL || '/api'

export const API = {
  async get<T>(path: string): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`)
    if (!res.ok) throw new Error(`API Error: ${res.status}`)
    return res.json()
  },
  
  async post<T>(path: string, body?: any): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    })
    if (!res.ok) throw new Error(`API Error: ${res.status}`)
    return res.json()
  },
  
  async delete(path: string): Promise<void> {
    const res = await fetch(`${API_BASE}${path}`, { method: 'DELETE' })
    if (!res.ok) throw new Error(`API Error: ${res.status}`)
  }
}
