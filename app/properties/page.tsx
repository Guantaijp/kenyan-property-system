"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { MoreHorizontal, Plus, Search } from "lucide-react"

export default function PropertiesPage() {
  // Sample property data
  const properties = [
    {
      id: "PROP-001",
      name: "Green Park Apartments",
      location: "Kilimani, Nairobi",
      type: "Apartment Building",
      units: 12,
      occupiedUnits: 10,
      monthlyRevenue: 540000,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "PROP-002",
      name: "Sunrise Heights",
      location: "Westlands, Nairobi",
      type: "Apartment Building",
      units: 8,
      occupiedUnits: 7,
      monthlyRevenue: 420000,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "PROP-003",
      name: "Riverside Apartments",
      location: "Riverside, Nairobi",
      type: "Apartment Building",
      units: 16,
      occupiedUnits: 14,
      monthlyRevenue: 840000,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "PROP-004",
      name: "Parkview Estate",
      location: "Karen, Nairobi",
      type: "Townhouses",
      units: 6,
      occupiedUnits: 5,
      monthlyRevenue: 450000,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "PROP-005",
      name: "Savannah Villas",
      location: "Runda, Nairobi",
      type: "Villas",
      units: 4,
      occupiedUnits: 3,
      monthlyRevenue: 360000,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "PROP-006",
      name: "Mombasa Road Commercial",
      location: "Mombasa Road, Nairobi",
      type: "Commercial Building",
      units: 8,
      occupiedUnits: 6,
      monthlyRevenue: 720000,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <LayoutWithSidebar>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-navy-blue">Properties</h1>
            <p className="text-muted-foreground">Manage your property portfolio</p>
          </div>
          <Button className="bg-navy-blue hover:bg-navy-blue/90">
            <Plus className="mr-2 h-4 w-4" /> Add Property
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search properties..." className="w-full bg-white pl-8 shadow-none" />
            </div>
            <Tabs defaultValue="all" className="w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="h-48 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-navy-blue">{property.name}</CardTitle>
                      <CardDescription>{property.location}</CardDescription>
                    </div>
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
                        <DropdownMenuItem>Edit property</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete property</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Units</span>
                      <span className="font-medium">
                        {property.occupiedUnits}/{property.units} Occupied
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-4 py-3">
                  <div className="flex w-full items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Monthly Revenue</span>
                      <div className="font-bold text-navy-blue">KSh {property.monthlyRevenue.toLocaleString()}</div>
                    </div>
                    <Button variant="outline" size="sm" className="text-navy-blue">
                      View Units
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
