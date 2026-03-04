import { NextResponse } from "next/server";
import { initializeSheetHeaders } from "@/lib/google-sheets";

export async function POST() {
  try {
    const result = await initializeSheetHeaders();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Init sheet error:", error);
    return NextResponse.json(
      { error: "Failed to initialize sheet headers" },
      { status: 500 }
    );
  }
}
