import { NextResponse } from "next/server"
import { db } from "@/lib/database"

export async function GET() {
  try {
    const stats = await db.getStats()
    return NextResponse.json({ stats, success: true })
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch statistics", success: false }, { status: 500 })
  }
}
