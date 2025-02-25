import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container flex items-center justify-center min-h-screen px-4 py-12">
        <LoginForm />
      </div>
    </main>
  )
}

