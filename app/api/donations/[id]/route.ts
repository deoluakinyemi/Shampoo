import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/database"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const donation = await db.getDonationById(params.id)

    if (!donation) {
      return NextResponse.json({ error: "Donation not found", success: false }, { status: 404 })
    }

    return NextResponse.json({ donation, success: true })
  } catch (error) {
    console.error("Error fetching donation:", error)
    return NextResponse.json({ error: "Failed to fetch donation", success: false }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const updatedDonation = await db.updateDonation(params.id, body)

    if (!updatedDonation) {
      return NextResponse.json({ error: "Donation not found", success: false }, { status: 404 })
    }

    return NextResponse.json({
      donation: updatedDonation,
      success: true,
      message: "Donation updated successfully!",
    })
  } catch (error) {
    console.error("Error updating donation:", error)
    return NextResponse.json({ error: "Failed to update donation", success: false }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const deleted = await db.deleteDonation(params.id)

    if (!deleted) {
      return NextResponse.json({ error: "Donation not found", success: false }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Donation deleted successfully!",
    })
  } catch (error) {
    console.error("Error deleting donation:", error)
    return NextResponse.json({ error: "Failed to delete donation", success: false }, { status: 500 })
  }
}
