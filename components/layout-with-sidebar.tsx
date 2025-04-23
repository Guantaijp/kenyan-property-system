"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Building, Home, Users, Wallet, BarChart4, Settings, LogOut, Bell } from "lucide-react"

interface LayoutWithSidebarProps {
  children: React.ReactNode
}

export function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-navy-blue text-white md:flex">
        <div className="flex h-14 items-center border-b border-white/10 px-4">
          <h1 className="text-xl font-bold">Nyumba Manager</h1>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm">
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/") ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/properties"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/properties") ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Building className="h-4 w-4" />
              Properties
            </Link>
            <Link
              href="/tenants"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/tenants") ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              Tenants
            </Link>
            <Link
              href="/payments"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/payments") ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Wallet className="h-4 w-4" />
              Payments
            </Link>
            <Link
              href="/reports"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/reports") ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <BarChart4 className="h-4 w-4" />
              Reports
            </Link>
            <Link
              href="/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/settings") ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto border-t border-white/10 p-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <div className="w-full flex items-center justify-between">
            <span className="md:hidden text-xl font-bold text-navy-blue">Nyumba Manager</span>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="icon" className="text-navy-blue">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="sm" className="text-navy-blue">
                John Kamau
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
