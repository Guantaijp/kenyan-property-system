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
import { Badge } from "@/components/ui/badge"
import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { MoreHorizontal, Plus, Search, Filter, Download } from "lucide-react"

export default function PaymentsPage() {
  // Sample payment data
  const payments = [
    {
      id: "PAY-001",
      tenant: "Jane Wanjiku",
      property: "Green Park Apartments",
      unit: "A4",
      amount: 45000,
      date: "2023-04-15",
      dueDate: "2023-04-05",
      method: "M-Pesa",
      reference: "QWE12345",
      status: "completed",
    },
    {
      id: "PAY-002",
      tenant: "David Omondi",
      property: "Sunrise Heights",
      unit: "B2",
      amount: 35000,
      date: "2023-04-14",
      dueDate: "2023-04-05",
      method: "Bank Transfer",
      reference: "BT78901",
      status: "completed",
    },
    {
      id: "PAY-003",
      tenant: "Mary Akinyi",
      property: "Riverside Apartments",
      unit: "C3",
      amount: 50000,
      date: "2023-04-12",
      dueDate: "2023-04-05",
      method: "M-Pesa",
      reference: "QWE67890",
      status: "completed",
    },
    {
      id: "PAY-004",
      tenant: "John Mwangi",
      property: "Parkview Estate",
      unit: "D1",
      amount: 60000,
      date: null,
      dueDate: "2023-04-05",
      method: null,
      reference: null,
      status: "pending",
    },
    {
      id: "PAY-005",
      tenant: "Sarah Njeri",
      property: "Green Park Apartments",
      unit: "A2",
      amount: 45000,
      date: "2023-04-05",
      dueDate: "2023-04-05",
      method: "M-Pesa",
      reference: "QWE54321",
      status: "completed",
    },
    {
      id: "PAY-006",
      tenant: "Peter Kamau",
      property: "Sunrise Heights",
      unit: "B4",
      amount: 38000,
      date: "2023-04-03",
      dueDate: "2023-04-05",
      method: "Cash",
      reference: "CASH001",
      status: "completed",
    },
    {
      id: "PAY-007",
      tenant: "Lucy Wairimu",
      property: "Riverside Apartments",
      unit: "C1",
      amount: 52000,
      date: null,
      dueDate: "2023-04-05",
      method: null,
      reference: null,
      status: "overdue",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Paid</Badge>
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      case "overdue":
        return <Badge className="bg-red-500">Overdue</Badge>
      default:
        return null
    }
  }

  return (
    <LayoutWithSidebar>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-navy-blue">Payments</h1>
            <p className="text-muted-foreground">Track and manage rent payments</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="text-navy-blue">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
            <Button className="bg-navy-blue hover:bg-navy-blue/90">
              <Plus className="mr-2 h-4 w-4" /> Record Payment
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search payments..." className="w-full bg-white pl-8 shadow-none" />
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
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Property & Unit</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Payment Date</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.tenant}</TableCell>
                      <TableCell>
                        {payment.property}
                        <div className="text-xs text-muted-foreground">Unit {payment.unit}</div>
                      </TableCell>
                      <TableCell>KSh {payment.amount.toLocaleString()}</TableCell>
                      <TableCell>{new Date(payment.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{payment.date ? new Date(payment.date).toLocaleDateString() : "-"}</TableCell>
                      <TableCell>{payment.method || "-"}</TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
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
                            <DropdownMenuItem>Send receipt</DropdownMenuItem>
                            <DropdownMenuItem>Edit payment</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Send reminder</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete payment</DropdownMenuItem>
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
