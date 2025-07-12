"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = localStorage.getItem("fgci_admin_authenticated")
      const loginTime = localStorage.getItem("fgci_admin_login_time")

      if (!authenticated || !loginTime) {
        setIsAuthenticated(false)
        setIsLoading(false)
        return
      }

      // Check if session is still valid (24 hours)
      const sessionDuration = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
      const currentTime = Date.now()
      const loginTimestamp = Number.parseInt(loginTime)

      if (currentTime - loginTimestamp > sessionDuration) {
        // Session expired
        localStorage.removeItem("fgci_admin_authenticated")
        localStorage.removeItem("fgci_admin_login_time")
        setIsAuthenticated(false)
        setIsLoading(false)
        return
      }

      setIsAuthenticated(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">Verifying Access</h2>
            <p className="text-slate-600">Please wait while we authenticate your session...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">Access Denied</h2>
            <p className="text-slate-600">Redirecting to login page...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
