import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2 } from "lucide-react"

interface Role {
  id: number
  name: string
  description: string
  userCount: number
}

interface RoleListProps {
  roles: Role[]
}

export function RoleList({ roles }: RoleListProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Users</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell className="font-medium">{role.name}</TableCell>
              <TableCell>{role.description}</TableCell>
              <TableCell>{role.userCount}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mr-2">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

