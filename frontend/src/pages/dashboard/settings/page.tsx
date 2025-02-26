import type { Metadata } from "next"
import { SettingsForm } from "@/components/settings-form"

export const metadata: Metadata = {
  title: "Settings | BifrostAuth",
  description: "Manage your BifrostAuth account settings and preferences",
}

export default function SettingsPage() {
  return <SettingsForm />
}

