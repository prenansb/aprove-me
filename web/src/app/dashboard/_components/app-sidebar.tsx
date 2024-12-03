'use client'

import Image from 'next/image'
import * as React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { FileText, Home, Users } from 'lucide-react'
import { NavProjects } from './nav-projects'
import { NavUser } from './nav-user'

const data = {
  user: {
    name: 'aprovame',
    email: 'a@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  projects: [
    {
      name: 'Início',
      url: '/dashboard',
      icon: Home,
    },
    {
      name: 'Pagáveis',
      url: '/dashboard/payables',
      icon: FileText,
    },
    {
      name: 'Cedentes',
      url: '/dashboard/assignors',
      icon: Users,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg bg-muted">
                  <Image src="/logo-bankme.png" alt="BankMe" width={16} height={16} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">BankMe</span>
                  <span className="truncate text-xs">Tech</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
