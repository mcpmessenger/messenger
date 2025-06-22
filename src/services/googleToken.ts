// New helper to fetch a fresh Google access token (shared by Drive, Gmail, Calendar)
// Stores token in localStorage under 'google_access_token'

import { safeSet, safeGet } from '../utils/safeLocal';

export async function fetchGoogleAccessToken(): Promise<string> {
  // 1) Try cache first
  let tok = safeGet('google_access_token');
  if (tok) return tok;

  try {
    const res = await fetch('/api/google/token');
    if (!res.ok) throw new Error('token endpoint failed');
    const data = await res.json();
    tok = data.access_token || '';
    if (tok) {
      safeSet('google_access_token', tok);
    }
    return tok;
  } catch {
    return '';
  }
} 