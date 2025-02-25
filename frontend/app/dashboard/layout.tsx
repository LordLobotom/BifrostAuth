import type React from "react"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        <SidebarNav />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </SidebarProvider>
  )
}

