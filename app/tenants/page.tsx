"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { MoreHorizontal, Plus, Search, Filter } from "lucide-react"

export default function TenantsPage() {
  // Sample tenant data
  const tenants = [
    {
      id: "TEN-001",
      name: "Jane Wanjiku",
      email: "jane.wanjiku@example.com",
      phone: "+254 712 345 678",
      property: "Green Park Apartments",
      unit: "A4",
      moveInDate: "2022-06-15",
      leaseEnd: "2023-06-14",
      status: "active",
      rentAmount: 45000,
      lastPayment: "2023-04-02",
      initials: "JW",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "TEN-002",
      name: "David Omondi",
      email: "david.omondi@example.com",
      phone: "+254 723 456 789",
      property: "Sunrise Heights",
      unit: "B2",
      moveInDate: "2022-08-01",
      leaseEnd: "2023-07-31",
      status: "active",
      rentAmount: 35000,
      lastPayment: "2023-04-05",
      initials: "DO",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "TEN-003",
      name: "Mary Akinyi",
      email: "mary.akinyi@example.com",
      phone: "+254 734 567 890",
      property: "Riverside Apartments",
      unit: "C3",
      moveInDate: "2022-03-10",
      leaseEnd: "2023-03-09",
      status: "renewal",
      rentAmount: 50000,
      lastPayment: "2023-04-01",
      initials: "MA",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "TEN-004",
      name: "John Mwangi",
      email: "john.mwangi@example.com",
      phone: "+254 745 678 901",
      property: "Parkview Estate",
      unit: "D1",
      moveInDate: "2022-11-15",
      leaseEnd: "2023-11-14",
      status: "active",
      rentAmount: 60000,
      lastPayment: "2023-03-28",
      initials: "JM",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "TEN-005",
      name: "Sarah Njeri",
      email: "sarah.njeri@example.com",
      phone: "+254 756 789 012",
      property: "Green Park Apartments",
      unit: "A2",
      moveInDate: "2022-05-01",
      leaseEnd: "2023-04-30",
      status: "overdue",
      rentAmount: 45000,
      lastPayment: "2023-03-15",
      initials: "SN",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "TEN-006",
      name: "Peter Kamau",
      email: "peter.kamau@example.com",
      phone: "+254 767 890 123",
      property: "Sunrise Heights",
      unit: "B4",
      moveInDate: "2022-09-01",
      leaseEnd: "2023-08-31",
      status: "active",
      rentAmount: 38000,
      lastPayment: "2023-04-03",
      initials: "PK",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "TEN-007",
      name: "Lucy Wairimu",
      email: "lucy.wairimu@example.com",
      phone: "+254 778 901 234",
      property: "Riverside Apartments",
      unit: "C1",
      moveInDate: "2022-07-15",
      leaseEnd: "2023-07-14",
      status: "active",
      rentAmount: 52000,
      lastPayment: "2023-04-05",
      initials: "LW",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "renewal":
        return <Badge className="bg-amber-500">Renewal Due</Badge>
      case "overdue":
        return <Badge className="bg-red-500">Payment Overdue</Badge>
      default:
        return null
    }
  }

  return (
    <LayoutWithSidebar>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-navy-blue">Tenants</h1>
            <p className="text-muted-foreground">Manage your tenants and leases</p>
          </div>
          <Button className="bg-navy-blue hover:bg-navy-blue/90">
            <Plus className="mr-2 h-4 w-4" /> Add Tenant
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search tenants..." className="w-full bg-white pl-8 shadow-none" />
            </div>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Property & Unit</TableHead>
                    <TableHead>Lease Period</TableHead>
                    <TableHead>Rent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tenants.map((tenant) => (
                    <TableRow key={tenant.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={tenant.image || "/placeholder.svg"} alt={tenant.name} />
                            <AvatarFallback>{tenant.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{tenant.name}</div>
                            <div className="text-xs text-muted-foreground">{tenant.email}</div>
                            <div className="text-xs text-muted-foreground">{tenant.phone}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{tenant.property}</div>
                        <div className="text-xs text-muted-foreground">Unit {tenant.unit}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {new Date(tenant.moveInDate).toLocaleDateString()} -{" "}
                          {new Date(tenant.leaseEnd).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">KSh {tenant.rentAmount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">
                          Last paid: {new Date(tenant.lastPayment).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(tenant.status)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit tenant</DropdownMenuItem>
                            <DropdownMenuItem>Payment history</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Renew lease</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">End tenancy</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
