// API base URL - configured via VITE_API_URL environment variable
// In production (Vercel): set VITE_API_URL to your backend URL (e.g., http://43.159.36.166:3313)
// In development: leave empty to use relative path /api
const API_BASE = import.meta.env.VITE_API_URL || '';

export const api = {
  settings: () => `${API_BASE}/api/settings`,
  files: () => `${API_BASE}/api/files`,
  filesId: (id: string) => `${API_BASE}/api/files/${id}`,
  filesBatch: () => `${API_BASE}/api/files/batch`,
  conversions: () => `${API_BASE}/api/conversions`,
  conversionsComplete: () => `${API_BASE}/api/conversions/complete`,
  health: () => `${API_BASE}/api/health/info`,
  docs: () => `${API_BASE}/api/docs`,
};
