import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserPlus, Activity } from "lucide-react"

export function UserActivityStats() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10,482</div>
          <p className="text-xs text-muted-foreground">+2.5% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Users</CardTitle>
          <UserPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,245</div>
          <p className="text-xs text-muted-foreground">+180 in the last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8,765</div>
          <p className="text-xs text-muted-foreground">83.6% of total users</p>
        </CardContent>
      </Card>
    </>
  )
}

