'use client'

import React from 'react'
import { useTimeBasedTheme } from '@/hooks/useTimeBasedTheme'

export function TimeBasedThemeProvider({ children }: { children: React.ReactNode }) {
  useTimeBasedTheme()
  
  return <>{children}</>
}
