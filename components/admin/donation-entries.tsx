"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, Download, Eye, Edit, Mail, Phone, Calendar, DollarSign, Loader2, RefreshCw } from "lucide-react"

interface DonationEntry {
  id: string
  fullName: string
  email: string
  phone: string
  graduationSet: string
  amount: number
  paymentPlan: string
  paymentDates: string
  alreadyPaid: boolean
  anonymous: boolean
  status: "pledged" | "partial" | "paid"
  message: string
  createdAt: string
}

export function DonationEntries() {
  const [donations, setDonations] = useState<DonationEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSet, setFilterSet] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [stats, setStats] = useState({
    totalAmount: 0,
    totalContributors: 0,
    paidCount: 0,
    partialCount: 0,
    pledgedCount: 0,
  })

  const fetchDonations = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (searchTerm) params.append("search", searchTerm)
      if (filterSet !== "all") params.append("set", filterSet)
      if (filterStatus !== "all") params.append("status", filterStatus)

      const response = await fetch(`/api/donations?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        setDonations(result.donations)

        // Calculate stats
        const totalAmount = result.donations.reduce((sum: number, d: DonationEntry) => sum + d.amount, 0)
        const totalContributors = result.donations.length
        const paidCount = result.donations.filter((d: DonationEntry) => d.status === "paid").length
        const partialCount = result.donations.filter((d: DonationEntry) => d.status === "partial").length
        const pledgedCount = result.donations.filter((d: DonationEntry) => d.status === "pledged").length

        setStats({
          totalAmount,
          totalContributors,
          paidCount,
          partialCount,
          pledgedCount,
        })
      } else {
        setError(result.error || "Failed to fetch donations")
      }
    } catch (err) {
      setError("Network error. Please try again.")
      console.error("Error fetching donations:", err)
    } finally {
      setLoading(false)
    }
  }

  const updateDonationStatus = async (id: string, newStatus: "pledged" | "partial" | "paid") => {
    try {
      const response = await fetch(`/api/donations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      const result = await response.json()
      if (result.success) {
        fetchDonations() // Refresh the list
      } else {
        setError(result.error || "Failed to update donation")
      }
    } catch (err) {
      setError("Failed to update donation status")
      console.error("Error updating donation:", err)
    }
  }

  const exportToCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Set", "Amount", "Payment Plan", "Status", "Date"]
    const csvData = donations.map((d) => [
      d.id,
      d.fullName,
      d.email,
      d.phone,
      `Class of ${d.graduationSet}`,
      d.amount,
      d.paymentPlan,
      d.status,
      new Date(d.createdAt).toLocaleDateString(),
    ])

    const csvContent = [headers, ...csvData].map((row) => row.map((field) => `"${field}"`).join(",")).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `donations-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  useEffect(() => {
    fetchDonations()
  }, [searchTerm, filterSet, filterStatus])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>
      case "partial":
        return <Badge className="bg-yellow-100 text-yellow-800">Partial</Badge>
      case "pledged":
        return <Badge className="bg-blue-100 text-blue-800">Pledged</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
    }
  }

  if (loading && donations.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading donations...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-slate-600">Total Amount</p>
                <p className="text-xl font-bold">₦{stats.totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600">Total Entries</p>
                <p className="text-xl font-bold">{stats.totalContributors}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-slate-600">Paid</p>
                <p className="text-xl font-bold">{stats.paidCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-600" />
              <div>
                <p className="text-sm text-slate-600">Pending</p>
                <p className="text-xl font-bold">{stats.pledgedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Donation Entries Management
            <Button onClick={fetchDonations} variant="outline" size="sm" disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search by name, email, or set..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterSet} onValueChange={setFilterSet}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by Set" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sets</SelectItem>
                {Array.from({ length: 52 }, (_, i) => 1973 + i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    Class of {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="pledged">Pledged</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={exportToCSV} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>

          {/* Donations Table */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor</TableHead>
                  <TableHead>Set</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{donation.anonymous ? "Anonymous Donor" : donation.fullName}</div>
                        {!donation.anonymous && (
                          <>
                            <div className="text-sm text-slate-600">{donation.email}</div>
                            {donation.phone && (
                              <div className="text-sm text-slate-600 flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                {donation.phone}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Class of {donation.graduationSet}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold">₦{donation.amount.toLocaleString()}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="capitalize">{donation.paymentPlan.replace("-", " ")}</div>
                        {donation.paymentDates && <div className="text-slate-600">{donation.paymentDates}</div>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={donation.status}
                        onValueChange={(value: "pledged" | "partial" | "paid") =>
                          updateDonationStatus(donation.id, value)
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pledged">Pledged</SelectItem>
                          <SelectItem value="partial">Partial</SelectItem>
                          <SelectItem value="paid">Paid</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{new Date(donation.createdAt).toLocaleDateString()}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" title="View Details">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" title="Edit">
                          <Edit className="w-4 h-4" />
                        </Button>
                        {!donation.anonymous && (
                          <Button size="sm" variant="outline" title="Send Email">
                            <Mail className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {donations.length === 0 && !loading && (
            <div className="text-center py-8 text-slate-600">
              {searchTerm || filterSet !== "all" || filterStatus !== "all"
                ? "No donations found matching your criteria."
                : "No donations submitted yet."}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
