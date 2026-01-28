export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/moeinrazavi' : ''
}

export function getImagePath(path: string) {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
