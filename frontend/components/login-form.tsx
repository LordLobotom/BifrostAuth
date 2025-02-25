"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
// import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Here you would typically call your authentication API
    // For now, we'll just simulate a delay and redirect
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 2000)
  }

  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked")
    // You can add a loading state or redirect here if needed
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-primary" fill="currentColor">
            <path d="M50 5 L90 30 L90 70 L50 95 L10 70 L10 30 Z" />
            <path d="M30 40 L50 50 L70 40 M50 50 L50 80" fill="none" stroke="white" strokeWidth="3" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter text-white">BifrostAuth</h1>
        <p className="text-sm text-gray-400">Secure access to your enterprise systems</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@company.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            required
            className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            required
            className="bg-gray-800/50 border-gray-700 text-white"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" className="border-gray-700 data-[state=checked]:bg-primary" />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <motion.div whileTap={{ scale: 0.995 }}>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </motion.div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        className="w-full bg-white text-black hover:bg-gray-100"
        onClick={handleGoogleSignIn}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
          <path d="M1 1h22v22H1z" fill="none" />
        </svg>
        Sign in with Google
      </Button>
      <div className="flex flex-col space-y-2 text-center">
        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
          Forgot your password?
        </Link>
        <div className="text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

