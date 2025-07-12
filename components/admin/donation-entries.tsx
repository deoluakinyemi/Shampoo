"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Eye, Edit, Mail, Phone, Calendar, DollarSign } from "lucide-react"

export function DonationEntries() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSet, setFilterSet] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  // Mock donation data - in real app, this would come from your backend
  const donations = [
    {
      id: "DON-001",
      fullName: "Dr. Adebayo Ogundimu",
      email: "adebayo.ogundimu@email.com",
      phone: "+234 803 123 4567",
      graduationSet: "1985",
      amount: 1500000,
      paymentPlan: "one-time",
      paymentDates: "July 31st, 2024",
      alreadyPaid: false,
      anonymous: false,
      status: "pledged",
      message: "Happy to contribute to rebuilding our beloved hall.",
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "DON-002",
      fullName: "Mrs. Fatima Al-Hassan",
      email: "fatima.hassan@email.com",
      phone: "+234 807 987 6543",
      graduationSet: "1992",
      amount: 800000,
      paymentPlan: "three-part",
      paymentDates: "July 31st, August 31st, September 30th",
      alreadyPaid: true,
      anonymous: false,
      status: "partial",
      message: "This hall holds so many precious memories.",
      createdAt: "2024-01-14T14:20:00Z",
    },
    {
      id: "DON-003",
      fullName: "Anonymous Donor",
      email: "anonymous@email.com",
      phone: "",
      graduationSet: "1978",
      amount: 2000000,
      paymentPlan: "one-time",
      paymentDates: "August 15th, 2024",
      alreadyPaid: false,
      anonymous: true,
      status: "paid",
      message: "",
      createdAt: "2024-01-13T09:15:00Z",
    },
    {
      id: "DON-004",
      fullName: "Engr. Chukwuma Okafor",
      email: "chukwuma.okafor@email.com",
      phone: "+234 806 555 1234",
      graduationSet: "1978",
      amount: 1200000,
      paymentPlan: "monthly",
      paymentDates: "Monthly for 6 months",
      alreadyPaid: false,
      anonymous: false,
      status: "pledged",
      message: "Let's rebuild it stronger than before!",
      createdAt: "2024-01-12T16:45:00Z",
    },
    {
      id: "DON-005",
      fullName: "Prof. Aisha Abdullahi",
      email: "aisha.abdullahi@email.com",
      phone: "+234 805 777 8888",
      graduationSet: "1989",
      amount: 1000000,
      paymentPlan: "three-part",
      paymentDates: "August 1st, September 1st, October 1st",
      alreadyPaid: true,
      anonymous: false,
      status: "partial",
      message: "Our sanctuary deserves to be restored.",
      createdAt: "2024-01-11T11:30:00Z",
    },
    {
      id: "DON-006",
      fullName: "Mr. Ibrahim Yusuf",
      email: "ibrahim.yusuf@email.com",
      phone: "+234 809 444 5555",
      graduationSet: "2024",
      amount: 250000,
      paymentPlan: "monthly",
      paymentDates: "Monthly from July to December",
      alreadyPaid: false,
      anonymous: false,
      status: "pledged",
      message: "Proud to give back to my alma mater as a recent graduate.",
      createdAt: "2024-07-10T08:15:00Z",
    },
    {
      id: "DON-007",
      fullName: "Miss Sarah Adebisi",
      email: "sarah.adebisi@email.com",
      phone: "+234 808 333 2222",
      graduationSet: "2020",
      amount: 150000,
      paymentPlan: "three-part",
      paymentDates: "July, September, November",
      alreadyPaid: true,
      anonymous: false,
      status: "partial",
      message: "The FCS Hall was central to my spiritual growth.",
      createdAt: "2024-07-08T12:45:00Z",
    },
  ]

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

  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.graduationSet.includes(searchTerm)

    const matchesSet = filterSet === "all" || donation.graduationSet === filterSet
    const matchesStatus = filterStatus === "all" || donation.status === filterStatus

    return matchesSearch && matchesSet && matchesStatus
  })

  const totalAmount = filteredDonations.reduce((sum, donation) => sum + donation.amount, 0)

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-slate-600">Total Amount</p>
                <p className="text-xl font-bold">₦{totalAmount.toLocaleString()}</p>
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
                <p className="text-xl font-bold">{filteredDonations.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-slate-600">This Month</p>
                <p className="text-xl font-bold">{filteredDonations.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-600" />
              <div>
                <p className="text-sm text-slate-600">Pending Follow-up</p>
                <p className="text-xl font-bold">{filteredDonations.filter((d) => d.status === "pledged").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Donation Entries Management</CardTitle>
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
                <SelectItem value="1985">Class of 1985</SelectItem>
                <SelectItem value="1992">Class of 1992</SelectItem>
                <SelectItem value="1978">Class of 1978</SelectItem>
                <SelectItem value="1989">Class of 1989</SelectItem>
                <SelectItem value="2001">Class of 2001</SelectItem>
                <SelectItem value="2010">Class of 2010</SelectItem>
                <SelectItem value="2015">Class of 2015</SelectItem>
                <SelectItem value="2020">Class of 2020</SelectItem>
                <SelectItem value="2024">Class of 2024</SelectItem>
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
            <Button className="flex items-center gap-2">
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
                {filteredDonations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{donation.fullName}</div>
                        <div className="text-sm text-slate-600">{donation.email}</div>
                        {donation.phone && (
                          <div className="text-sm text-slate-600 flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {donation.phone}
                          </div>
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
                        <div className="text-slate-600">{donation.paymentDates}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(donation.status)}</TableCell>
                    <TableCell>
                      <div className="text-sm">{new Date(donation.createdAt).toLocaleDateString()}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredDonations.length === 0 && (
            <div className="text-center py-8 text-slate-600">No donations found matching your criteria.</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
