import { UsersTable } from "@/components/users-table"
import { UserTableToolbar } from "@/components/user-table-toolbar"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">Manage user access and permissions for your organization</p>
      </div>
      <div className="space-y-4">
        <UserTableToolbar />
        <UsersTable />
      </div>
    </div>
  )
}

