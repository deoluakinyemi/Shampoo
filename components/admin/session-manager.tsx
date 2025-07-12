"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, LogOut, RefreshCw } from "lucide-react"

export function SessionManager() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0)
  const [showWarning, setShowWarning] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkSession = () => {
      const loginTime = localStorage.getItem("fgci_admin_login_time")
      if (!loginTime) return

      const sessionDuration = 24 * 60 * 60 * 1000 // 24 hours
      const currentTime = Date.now()
      const loginTimestamp = Number.parseInt(loginTime)
      const elapsed = currentTime - loginTimestamp
      const remaining = sessionDuration - elapsed

      setTimeRemaining(remaining)

      // Show warning when 30 minutes remaining
      if (remaining <= 30 * 60 * 1000 && remaining > 0) {
        setShowWarning(true)
      }

      // Auto logout when session expires
      if (remaining <= 0) {
        handleLogout()
      }
    }

    checkSession()
    const interval = setInterval(checkSession, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("fgci_admin_authenticated")
    localStorage.removeItem("fgci_admin_login_time")
    router.push("/admin/login")
  }

  const extendSession = () => {
    localStorage.setItem("fgci_admin_login_time", Date.now().toString())
    setShowWarning(false)
    setTimeRemaining(24 * 60 * 60 * 1000) // Reset to 24 hours
  }

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  if (showWarning) {
    return (
      <div className="fixed top-4 right-4 z-50 w-96">
        <Alert className="border-amber-200 bg-amber-50">
          <Clock className="w-4 h-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Session Expiring Soon</div>
                <div className="text-sm">Time remaining: {formatTime(timeRemaining)}</div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={extendSession} className="bg-amber-600 hover:bg-amber-700">
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Extend
                </Button>
                <Button size="sm" variant="outline" onClick={handleLogout}>
                  <LogOut className="w-3 h-3 mr-1" />
                  Logout
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return null
}
