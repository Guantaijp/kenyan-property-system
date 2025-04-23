import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

export function MaintenanceRequests() {
  const requests = [
    {
      id: "REQ-001",
      tenant: "Jane Wanjiku",
      property: "Green Park Apartments",
      unit: "A4",
      issue: "Leaking kitchen faucet",
      priority: "medium",
      status: "in-progress",
      date: "2023-04-10",
    },
    {
      id: "REQ-002",
      tenant: "David Omondi",
      property: "Sunrise Heights",
      unit: "B2",
      issue: "Electrical outlet not working",
      priority: "high",
      status: "pending",
      date: "2023-04-12",
    },
    {
      id: "REQ-003",
      tenant: "Mary Akinyi",
      property: "Riverside Apartments",
      unit: "C3",
      issue: "Broken window latch",
      priority: "low",
      status: "completed",
      date: "2023-04-05",
    },
    {
      id: "REQ-004",
      tenant: "John Mwangi",
      property: "Parkview Estate",
      unit: "D1",
      issue: "Water heater not working",
      priority: "high",
      status: "pending",
      date: "2023-04-14",
    },
    {
      id: "REQ-005",
      tenant: "Sarah Njeri",
      property: "Green Park Apartments",
      unit: "A2",
      issue: "Bathroom door handle loose",
      priority: "low",
      status: "in-progress",
      date: "2023-04-08",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            High
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Low
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Completed
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            In Progress
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            Pending
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Tenant</TableHead>
          <TableHead>Property</TableHead>
          <TableHead>Issue</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">{request.id}</TableCell>
            <TableCell>{request.tenant}</TableCell>
            <TableCell>
              {request.property}
              <div className="text-xs text-muted-foreground">Unit {request.unit}</div>
            </TableCell>
            <TableCell>{request.issue}</TableCell>
            <TableCell>{getPriorityBadge(request.priority)}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {getStatusIcon(request.status)}
                {getStatusBadge(request.status)}
              </div>
            </TableCell>
            <TableCell>{new Date(request.date).toLocaleDateString()}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm" className="text-navy-blue">
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
