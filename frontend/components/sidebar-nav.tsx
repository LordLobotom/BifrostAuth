"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, Settings, Shield, Activity, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-primary" fill="currentColor">
              <path d="M50 5 L90 30 L90 70 L50 95 L10 70 L10 30 Z" />
              <path d="M30 40 L50 50 L70 40 M50 50 L50 80" fill="none" stroke="white" strokeWidth="3" />
            </svg>
          </div>
          <div className="font-semibold">BifrostAuth</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
              <Link href="/dashboard">
                <Users className="w-4 h-4" />
                <span>Users</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/dashboard/roles"}>
              <Link href="/dashboard/roles">
                <Shield className="w-4 h-4" />
                <span>Roles</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname.startsWith("/dashboard/activity")}>
              <Link href="/dashboard/activity">
                <Activity className="w-4 h-4" />
                <span>Activity</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"}>
              <Link href="/dashboard/settings">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarTrigger />
    </Sidebar>
  )
}

