import { useEffect, useCallback } from 'react'

interface KeyboardShortcutHandlers {
  onOpenFilePicker?: () => void
  onStartConversion?: () => void
  onClearSelection?: () => void
}

export function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const modifier = isMac ? event.metaKey : event.ctrlKey

    // Ctrl+O / Cmd+O - Open file picker
    if (modifier && event.key === 'o') {
      event.preventDefault()
      handlers.onOpenFilePicker?.()
    }

    // Ctrl+Enter / Cmd+Enter - Start conversion
    if (modifier && event.key === 'Enter') {
      event.preventDefault()
      handlers.onStartConversion?.()
    }

    // Escape - Clear selection
    if (event.key === 'Escape') {
      event.preventDefault()
      handlers.onClearSelection?.()
    }
  }, [handlers])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
