import * as React from 'react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,IconNextChat
} from '@/components/ui/icons'
import { ThemeToggle } from './theme-toggle'
export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
       <IconNextChat />
       <span className="ml-2 md:flex">Appointment scheduler bot</span>
      </div>
      <div className="flex items-center justify-end space-x-2">
      <div className="flex items-center justify-between p-4">
        <ThemeToggle />
      </div>
        <a
          target="_blank"
          href="https://github.com/panchamk/nextjs-appointment-bot"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
      </div>
    </header>
  )
}
