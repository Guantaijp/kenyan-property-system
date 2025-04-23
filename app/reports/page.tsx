"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { Download, TrendingUp, Percent, DollarSign } from "lucide-react"
import { Overview } from "@/components/overview"

export default function ReportsPage() {
  return (
    <LayoutWithSidebar>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-navy-blue">Reports</h1>
            <p className="text-muted-foreground">View financial and property performance reports</p>
          </div>
          <Button variant="outline" className="text-navy-blue">
            <Download className="mr-2 h-4 w-4" /> Export Reports
          </Button>
        </div>

        <Tabs defaultValue="financial" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="financial">Financial Reports</TabsTrigger>
            <TabsTrigger value="occupancy">Occupancy Reports</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue (YTD)</CardTitle>
                  <DollarSign className="h-4 w-4 text-navy-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">KSh 14.2M</div>
                  <p className="text-xs text-muted-foreground">+12% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Expenses (YTD)</CardTitle>
                  <DollarSign className="h-4 w-4 text-navy-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">KSh 3.8M</div>
                  <p className="text-xs text-muted-foreground">+5% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Net Income (YTD)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-navy-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">KSh 10.4M</div>
                  <p className="text-xs text-muted-foreground">+15% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
                  <Percent className="h-4 w-4 text-navy-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">94.2%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="occupancy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Occupancy Report</CardTitle>
                <CardDescription>Current occupancy rates across properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[350px] items-center justify-center text-muted-foreground">
                  Occupancy chart will be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Report</CardTitle>
                <CardDescription>Maintenance requests and resolution times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[350px] items-center justify-center text-muted-foreground">
                  Maintenance chart will be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </LayoutWithSidebar>
  )
}
