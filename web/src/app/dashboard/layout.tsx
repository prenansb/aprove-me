import Sidebar from '@/components/sidebar'
import { Toaster } from '@/components/ui/toaster'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  )
}
