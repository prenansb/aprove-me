'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logout } from '@/app/(auth)/login/actions'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FileText, Home, Users } from 'lucide-react'

const sidebarItems = [
  { name: 'Início', href: '/dashboard', icon: Home },
  { name: 'Pagáveis', href: '/dashboard/payables', icon: FileText },
  { name: 'Cedentes', href: '/dashboard/assignors', icon: Users },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden bg-primary lg:flex lg:w-64 lg:flex-col">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex h-16 flex-shrink-0 items-center bg-primary px-4">
          <h1 className="text-2xl font-bold text-primary-foreground">PayDash</h1>
        </div>
        <nav className="mt-5 flex flex-1 flex-col gap-1 px-2">
          {sidebarItems.map(item => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground',
                  pathname === item.href &&
                  'bg-primary-foreground/20 text-white hover:bg-primary-foreground/20',
                )}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 bg-primary-foreground/10 p-4">
        <Button onClick={logout} variant="secondary" className="w-full">
          Log out
        </Button>
      </div>
    </div>
  )
}
