"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"
import { RoleList } from "@/components/role-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Role {
  id: number
  name: string
  description: string
  userCount: number
}

const initialRoles: Role[] = [
  { id: 1, name: "Admin", description: "Full system access", userCount: 5 },
  { id: 2, name: "Manager", description: "Can manage users and view reports", userCount: 15 },
  { id: 3, name: "User", description: "Standard user access", userCount: 150 },
  { id: 4, name: "Guest", description: "Limited read-only access", userCount: 30 },
]

export function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>(initialRoles)
  const [newRoleName, setNewRoleName] = useState("")
  const [newRoleDescription, setNewRoleDescription] = useState("")

  const handleAddRole = () => {
    if (newRoleName && newRoleDescription) {
      const newRole: Role = {
        id: roles.length + 1,
        name: newRoleName,
        description: newRoleDescription,
        userCount: 0,
      }
      setRoles([...roles, newRole])
      setNewRoleName("")
      setNewRoleDescription("")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Role Management</h1>
        <p className="text-muted-foreground">Create and manage user roles in your system</p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Existing Roles</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Role</DialogTitle>
              <DialogDescription>
                Create a new role for your system. Roles define the access levels and permissions for users.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newRoleDescription}
                  onChange={(e) => setNewRoleDescription(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddRole}>Add Role</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <RoleList roles={roles} />
    </div>
  )
}

