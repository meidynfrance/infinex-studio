import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendTelegramMessage } from "@/lib/telegram";
import { appendLeadToSheet } from "@/lib/google-sheets";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    // Content-Type validation
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 }
      );
    }

    // Request size limit (10KB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10000) {
      return NextResponse.json(
        { error: "Request too large" },
        { status: 413 }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const locale = body.locale || "en";
    const utm = body.utm || {};
    const leadData = { ...parsed.data, locale, utm };

    const [telegramResult] = await Promise.all([
      sendTelegramMessage(leadData),
      appendLeadToSheet(leadData).catch((error) => {
        console.error(
          "Google Sheets append failed:",
          error instanceof Error ? error.message : "Unknown error"
        );
        return { ok: false, error: "Sheets write failed" };
      }),
    ]);

    if (!telegramResult.ok) {
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
