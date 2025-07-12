"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationEntries } from "@/components/admin/donation-entries"
import { ContentManager } from "@/components/admin/content-manager"
import { ImageManager } from "@/components/admin/image-manager"
import { HeaderFooterManager } from "@/components/admin/header-footer-manager"
import { Analytics } from "@/components/admin/analytics"
import { Settings } from "@/components/admin/settings"
import {
  BarChart3,
  FileText,
  ImageIcon,
  Layout,
  SettingsIcon,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  LogOut,
  Shield,
} from "lucide-react"
import { RealTimeStats } from "@/components/admin/real-time-stats"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem("fgci_admin_authenticated")
    localStorage.removeItem("fgci_admin_login_time")

    // Redirect to login
    router.push("/admin/login")
  }

  // Mock data - in real app, this would come from your backend
  const stats = [
    {
      title: "Total Donations",
      value: "₦54,300,000",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Contributors",
      value: "281",
      change: "+8 today",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Completion Rate",
      value: "54.3%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Days Remaining",
      value: "127",
      change: "Until deadline",
      icon: Calendar,
      color: "text-amber-600",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
                  <p className="text-slate-600">Manage your FGCI fundraising campaign</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-slate-600">Last updated</div>
                <div className="font-semibold">{new Date().toLocaleString()}</div>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2 text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="donations" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Donations</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Images</span>
            </TabsTrigger>
            <TabsTrigger value="layout" className="flex items-center gap-2">
              <Layout className="w-4 h-4" />
              <span className="hidden sm:inline">Layout</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <SettingsIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <RealTimeStats />
            <Analytics />
          </TabsContent>

          <TabsContent value="donations">
            <DonationEntries />
          </TabsContent>

          <TabsContent value="content">
            <ContentManager />
          </TabsContent>

          <TabsContent value="images">
            <ImageManager />
          </TabsContent>

          <TabsContent value="layout">
            <HeaderFooterManager />
          </TabsContent>

          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
