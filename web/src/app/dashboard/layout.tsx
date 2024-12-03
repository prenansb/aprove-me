import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/app-sidebar'
import { BreadcrumbWithSegments } from './_components/breadcrumbs'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <BreadcrumbWithSegments />
            </div>
          </header>

          <div className="flex flex-1 flex-col overflow-hidden">
            <main className="flex-1 overflow-y-auto overflow-x-hidden">{children}</main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
