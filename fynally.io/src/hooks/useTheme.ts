// Deprecated: theme toggling removed. This hook remains to avoid broken imports in old branches.
export function useTheme() {
  return { theme: 'light' as const, toggleTheme: () => {} };
}
