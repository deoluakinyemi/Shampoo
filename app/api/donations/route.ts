import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const set = searchParams.get("set")
    const status = searchParams.get("status")

    let donations = await db.getDonations()

    // Apply filters
    if (search) {
      donations = await db.searchDonations(search)
    }

    if (set && set !== "all") {
      donations = donations.filter((d) => d.graduationSet === set)
    }

    if (status && status !== "all") {
      donations = donations.filter((d) => d.status === status)
    }

    return NextResponse.json({ donations, success: true })
  } catch (error) {
    console.error("Error fetching donations:", error)
    return NextResponse.json({ error: "Failed to fetch donations", success: false }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["fullName", "email", "graduationSet", "amount", "paymentPlan"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required`, success: false }, { status: 400 })
      }
    }

    // Create donation entry
    const donationData = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone || "",
      graduationSet: body.graduationSet,
      amount: body.amount === "custom" ? body.customAmount || 0 : Number.parseInt(body.amount),
      customAmount: body.amount === "custom" ? body.customAmount : undefined,
      paymentPlan: body.paymentPlan,
      paymentDates: body.paymentDates || "",
      alreadyPaid: body.alreadyPaid || false,
      anonymous: body.anonymous || false,
      message: body.message || "",
    }

    const newDonation = await db.createDonation(donationData)

    return NextResponse.json({
      donation: newDonation,
      success: true,
      message: "Donation pledge submitted successfully!",
    })
  } catch (error) {
    console.error("Error creating donation:", error)
    return NextResponse.json({ error: "Failed to submit donation", success: false }, { status: 500 })
  }
}
