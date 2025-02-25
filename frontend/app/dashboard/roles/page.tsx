import type { Metadata } from "next"
import { RoleManagement } from "@/components/role-management"

export const metadata: Metadata = {
  title: "Role Management | BifrostAuth",
  description: "Manage user roles and permissions in your BifrostAuth system",
}

export default function RolesPage() {
  return <RoleManagement />
}

