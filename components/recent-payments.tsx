import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentPayments() {
  const payments = [
    {
      id: "PAY-001",
      tenant: "Jane Wanjiku",
      property: "Green Park Apartments",
      unit: "A4",
      amount: 45000,
      date: "2023-04-15",
      status: "completed",
      initials: "JW",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "PAY-002",
      tenant: "David Omondi",
      property: "Sunrise Heights",
      unit: "B2",
      amount: 35000,
      date: "2023-04-14",
      status: "completed",
      initials: "DO",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "PAY-003",
      tenant: "Mary Akinyi",
      property: "Riverside Apartments",
      unit: "C3",
      amount: 50000,
      date: "2023-04-12",
      status: "completed",
      initials: "MA",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "PAY-004",
      tenant: "John Mwangi",
      property: "Parkview Estate",
      unit: "D1",
      amount: 60000,
      date: "2023-04-10",
      status: "pending",
      initials: "JM",
      image: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "PAY-005",
      tenant: "Sarah Njeri",
      property: "Green Park Apartments",
      unit: "A2",
      amount: 45000,
      date: "2023-04-05",
      status: "completed",
      initials: "SN",
      image: "/placeholder.svg?height=32&width=32",
    },
  ]

  return (
    <div className="space-y-8">
      {payments.map((payment) => (
        <div key={payment.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={payment.image || "/placeholder.svg"} alt={payment.tenant} />
            <AvatarFallback>{payment.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{payment.tenant}</p>
            <p className="text-sm text-muted-foreground">
              {payment.property} - Unit {payment.unit}
            </p>
          </div>
          <div className="ml-auto font-medium">
            <div className="text-right">
              <p className="text-sm font-medium">KSh {payment.amount.toLocaleString()}</p>
              <div className="flex items-center justify-end gap-2 mt-1">
                <p className="text-xs text-muted-foreground">{new Date(payment.date).toLocaleDateString()}</p>
                <Badge
                  variant={payment.status === "completed" ? "default" : "outline"}
                  className={payment.status === "completed" ? "bg-navy-blue text-white" : ""}
                >
                  {payment.status === "completed" ? "Paid" : "Pending"}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
