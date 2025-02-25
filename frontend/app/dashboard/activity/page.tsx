"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ActivityGraph } from "@/components/activity-graph"
import { UserActivityStats } from "@/components/user-activity-stats"

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Activity Dashboard</h1>
        <p className="text-muted-foreground">Monitor user engagement and system activity</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UserActivityStats />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Daily Active Users</CardTitle>
          <CardDescription>User activity over the past 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityGraph />
        </CardContent>
      </Card>
    </div>
  )
}

