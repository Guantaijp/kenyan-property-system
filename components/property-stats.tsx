import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, Wallet, AlertTriangle } from "lucide-react"

export function PropertyStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
          <Building className="h-4 w-4 text-navy-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-navy-blue">24</div>
          <p className="text-xs text-muted-foreground">+2 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
          <Users className="h-4 w-4 text-navy-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-navy-blue">86</div>
          <p className="text-xs text-muted-foreground">+12 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          <Wallet className="h-4 w-4 text-navy-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-navy-blue">KSh 1.2M</div>
          <p className="text-xs text-muted-foreground">+8.2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Issues</CardTitle>
          <AlertTriangle className="h-4 w-4 text-navy-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-navy-blue">7</div>
          <p className="text-xs text-muted-foreground">-2 from last week</p>
        </CardContent>
      </Card>
    </div>
  )
}
