// Simple in-memory database for demonstration
// In production, replace with a real database like PostgreSQL, MongoDB, etc.

export interface DonationEntry {
  id: string
  fullName: string
  email: string
  phone: string
  graduationSet: string
  amount: number
  customAmount?: number
  paymentPlan: string
  paymentDates: string
  alreadyPaid: boolean
  anonymous: boolean
  message: string
  status: "pledged" | "partial" | "paid"
  createdAt: string
  updatedAt: string
}

// In-memory storage (replace with real database in production)
const donations: DonationEntry[] = [
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
    updatedAt: "2024-01-15T10:30:00Z",
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
    updatedAt: "2024-01-14T14:20:00Z",
  },
]

// Database operations
export const db = {
  // Get all donations
  getDonations: async (): Promise<DonationEntry[]> => {
    return [...donations].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  },

  // Get donation by ID
  getDonationById: async (id: string): Promise<DonationEntry | null> => {
    return donations.find((d) => d.id === id) || null
  },

  // Create new donation
  createDonation: async (
    donationData: Omit<DonationEntry, "id" | "createdAt" | "updatedAt" | "status">,
  ): Promise<DonationEntry> => {
    const id = `DON-${String(donations.length + 1).padStart(3, "0")}`
    const now = new Date().toISOString()

    const newDonation: DonationEntry = {
      ...donationData,
      id,
      status: "pledged",
      createdAt: now,
      updatedAt: now,
    }

    donations.push(newDonation)
    return newDonation
  },

  // Update donation
  updateDonation: async (id: string, updates: Partial<DonationEntry>): Promise<DonationEntry | null> => {
    const index = donations.findIndex((d) => d.id === id)
    if (index === -1) return null

    donations[index] = {
      ...donations[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }

    return donations[index]
  },

  // Delete donation
  deleteDonation: async (id: string): Promise<boolean> => {
    const index = donations.findIndex((d) => d.id === id)
    if (index === -1) return false

    donations.splice(index, 1)
    return true
  },

  // Get statistics
  getStats: async () => {
    const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0)
    const totalContributors = donations.length
    const paidDonations = donations.filter((d) => d.status === "paid")
    const partialDonations = donations.filter((d) => d.status === "partial")
    const pledgedDonations = donations.filter((d) => d.status === "pledged")

    return {
      totalAmount,
      totalContributors,
      paidCount: paidDonations.length,
      partialCount: partialDonations.length,
      pledgedCount: pledgedDonations.length,
      completionRate: totalAmount > 0 ? Math.round((totalAmount / 100000000) * 100) : 0, // Assuming 100M goal
    }
  },

  // Get donations by graduation set
  getDonationsBySet: async (graduationSet: string): Promise<DonationEntry[]> => {
    return donations.filter((d) => d.graduationSet === graduationSet)
  },

  // Search donations
  searchDonations: async (query: string): Promise<DonationEntry[]> => {
    const lowercaseQuery = query.toLowerCase()
    return donations.filter(
      (d) =>
        d.fullName.toLowerCase().includes(lowercaseQuery) ||
        d.email.toLowerCase().includes(lowercaseQuery) ||
        d.graduationSet.includes(query) ||
        d.phone.includes(query),
    )
  },
}
