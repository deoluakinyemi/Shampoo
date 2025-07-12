"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Shield, Bell, Database, Mail, Download } from "lucide-react"

export function Settings() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "FGCI Alumni FCS Hall Rebuilding Campaign",
    siteDescription: "Help rebuild the FCS Church Hall at Federal Government College, Ilorin",
    adminEmail: "admin@fgci-alumni.org",
    timezone: "Africa/Lagos",
    currency: "NGN",
    maintenanceMode: false,
  })

  const [campaignSettings, setCampaignSettings] = useState({
    goalAmount: 100000000,
    startDate: "2024-07-01",
    endDate: "2024-12-31",
    allowAnonymous: true,
    requirePhoneNumber: false,
    enableInstallments: true,
    maxInstallmentMonths: 6,
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    donationAlerts: true,
    weeklyReports: true,
    milestoneAlerts: true,
    reminderEmails: true,
    adminNotifications: true,
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90,
    loginAttempts: 5,
    ipWhitelist: "",
  })

  const handleSave = (section: string) => {
    console.log(`Saving ${section} settings...`)
    // In a real app, this would save to your backend
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
          <p className="text-slate-600">Configure your fundraising campaign settings and preferences.</p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="campaign">Campaign</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <p className="text-slate-600">Basic website and system configuration.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={generalSettings.siteName}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    value={generalSettings.adminEmail}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, adminEmail: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="site-description">Site Description</Label>
                <Input
                  id="site-description"
                  value={generalSettings.siteDescription}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={generalSettings.timezone}
                    onValueChange={(value) => setGeneralSettings({ ...generalSettings, timezone: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Africa/Lagos">Africa/Lagos (WAT)</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                      <SelectItem value="Europe/London">Europe/London (GMT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={generalSettings.currency}
                    onValueChange={(value) => setGeneralSettings({ ...generalSettings, currency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NGN">Nigerian Naira (₦)</SelectItem>
                      <SelectItem value="USD">US Dollar ($)</SelectItem>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                      <SelectItem value="GBP">British Pound (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label htmlFor="maintenance-mode" className="text-base font-medium">
                    Maintenance Mode
                  </Label>
                  <p className="text-sm text-slate-600">Temporarily disable public access to the website</p>
                </div>
                <Switch
                  id="maintenance-mode"
                  checked={generalSettings.maintenanceMode}
                  onCheckedChange={(checked) => setGeneralSettings({ ...generalSettings, maintenanceMode: checked })}
                />
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("general")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save General Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaign">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Settings</CardTitle>
              <p className="text-slate-600">Configure fundraising campaign parameters.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="goal-amount">Goal Amount (₦)</Label>
                  <Input
                    id="goal-amount"
                    type="number"
                    value={campaignSettings.goalAmount}
                    onChange={(e) =>
                      setCampaignSettings({ ...campaignSettings, goalAmount: Number.parseInt(e.target.value) })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="max-installments">Max Installment Months</Label>
                  <Input
                    id="max-installments"
                    type="number"
                    value={campaignSettings.maxInstallmentMonths}
                    onChange={(e) =>
                      setCampaignSettings({
                        ...campaignSettings,
                        maxInstallmentMonths: Number.parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="start-date">Campaign Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={campaignSettings.startDate}
                    onChange={(e) => setCampaignSettings({ ...campaignSettings, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="end-date">Campaign End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={campaignSettings.endDate}
                    onChange={(e) => setCampaignSettings({ ...campaignSettings, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="allow-anonymous" className="text-base font-medium">
                      Allow Anonymous Donations
                    </Label>
                    <p className="text-sm text-slate-600">Let donors choose to remain anonymous on leaderboards</p>
                  </div>
                  <Switch
                    id="allow-anonymous"
                    checked={campaignSettings.allowAnonymous}
                    onCheckedChange={(checked) => setCampaignSettings({ ...campaignSettings, allowAnonymous: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="require-phone" className="text-base font-medium">
                      Require Phone Number
                    </Label>
                    <p className="text-sm text-slate-600">Make phone number mandatory for all donations</p>
                  </div>
                  <Switch
                    id="require-phone"
                    checked={campaignSettings.requirePhoneNumber}
                    onCheckedChange={(checked) =>
                      setCampaignSettings({ ...campaignSettings, requirePhoneNumber: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="enable-installments" className="text-base font-medium">
                      Enable Installment Payments
                    </Label>
                    <p className="text-sm text-slate-600">Allow donors to split payments over multiple months</p>
                  </div>
                  <Switch
                    id="enable-installments"
                    checked={campaignSettings.enableInstallments}
                    onCheckedChange={(checked) =>
                      setCampaignSettings({ ...campaignSettings, enableInstallments: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("campaign")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Campaign Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings
              </CardTitle>
              <p className="text-slate-600">Configure email notifications and alerts.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="email-notifications" className="text-base font-medium">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-slate-600">Enable all email notifications</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="donation-alerts" className="text-base font-medium">
                      Donation Alerts
                    </Label>
                    <p className="text-sm text-slate-600">Get notified immediately when new donations are received</p>
                  </div>
                  <Switch
                    id="donation-alerts"
                    checked={notificationSettings.donationAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, donationAlerts: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="weekly-reports" className="text-base font-medium">
                      Weekly Reports
                    </Label>
                    <p className="text-sm text-slate-600">Receive weekly campaign progress reports</p>
                  </div>
                  <Switch
                    id="weekly-reports"
                    checked={notificationSettings.weeklyReports}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, weeklyReports: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="milestone-alerts" className="text-base font-medium">
                      Milestone Alerts
                    </Label>
                    <p className="text-sm text-slate-600">Get notified when funding milestones are reached</p>
                  </div>
                  <Switch
                    id="milestone-alerts"
                    checked={notificationSettings.milestoneAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, milestoneAlerts: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="reminder-emails" className="text-base font-medium">
                      Payment Reminder Emails
                    </Label>
                    <p className="text-sm text-slate-600">Send automatic reminders for pending payments</p>
                  </div>
                  <Switch
                    id="reminder-emails"
                    checked={notificationSettings.reminderEmails}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, reminderEmails: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="admin-notifications" className="text-base font-medium">
                      Admin Notifications
                    </Label>
                    <p className="text-sm text-slate-600">Receive system and security notifications</p>
                  </div>
                  <Switch
                    id="admin-notifications"
                    checked={notificationSettings.adminNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, adminNotifications: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("notifications")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Notification Settings
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Mail className="w-4 h-4" />
                  Test Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <p className="text-slate-600">Configure security and access controls.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label htmlFor="two-factor" className="text-base font-medium">
                    Two-Factor Authentication
                  </Label>
                  <p className="text-sm text-slate-600">Add an extra layer of security to admin accounts</p>
                </div>
                <Switch
                  id="two-factor"
                  checked={securitySettings.twoFactorAuth}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input
                    id="session-timeout"
                    type="number"
                    value={securitySettings.sessionTimeout}
                    onChange={(e) =>
                      setSecuritySettings({ ...securitySettings, sessionTimeout: Number.parseInt(e.target.value) })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                  <Input
                    id="password-expiry"
                    type="number"
                    value={securitySettings.passwordExpiry}
                    onChange={(e) =>
                      setSecuritySettings({ ...securitySettings, passwordExpiry: Number.parseInt(e.target.value) })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="login-attempts">Max Login Attempts</Label>
                  <Input
                    id="login-attempts"
                    type="number"
                    value={securitySettings.loginAttempts}
                    onChange={(e) =>
                      setSecuritySettings({ ...securitySettings, loginAttempts: Number.parseInt(e.target.value) })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="ip-whitelist">IP Whitelist (comma-separated)</Label>
                  <Input
                    id="ip-whitelist"
                    value={securitySettings.ipWhitelist}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, ipWhitelist: e.target.value })}
                    placeholder="192.168.1.1, 10.0.0.1"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => handleSave("security")} className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Security Settings
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Database className="w-4 h-4" />
                  Backup Data
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Export Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
