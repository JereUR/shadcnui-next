'use client'

import { BellIcon } from 'lucide-react'
import { CommandDemo } from './Command'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: 'This is a notification',
      date: '02-01-2020',
      read: true
    },
    {
      text: 'This is another notification',
      date: '02-01-2020',
      read: false
    }
  ])

  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <Button variant="outline" size="icon">
              <div
                className={`absolute top-0 right-1 h-[6px] w-[6px] rounded-full my-1 ${
                  notifications.find((x: any) => x.read)
                    ? 'bg-green-500'
                    : 'bg-neutral-200'
                }`}
              />
              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="p-1 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? 'bg-green-500' : 'bg-neutral-200'
                  }`}
                />
                <div>
                  <p>{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
