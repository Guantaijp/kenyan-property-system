"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentPayments } from "@/components/recent-payments"
import { PropertyStats } from "@/components/property-stats"
import { MaintenanceRequests } from "@/components/maintenance-requests"
import { LayoutWithSidebar } from "@/components/layout-with-sidebar"

export default function Dashboard() {
  return (
    <LayoutWithSidebar>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-navy-blue">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your property management dashboard.</p>
        </div>

        {/* Stats Cards */}
        <PropertyStats />

        {/* Charts and Tables */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>Latest tenant payments</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentPayments />
            </CardContent>
          </Card>
        </div>

        {/* Maintenance Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Requests</CardTitle>
            <CardDescription>Recent maintenance issues reported by tenants</CardDescription>
          </CardHeader>
          <CardContent>
            <MaintenanceRequests />
          </CardContent>
        </Card>
      </div>
    </LayoutWithSidebar>
  )
}
