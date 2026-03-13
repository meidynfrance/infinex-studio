type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

type SendMessageParams = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  revenue: string;
  service: string[];
  locale: string;
  utm?: UtmParams;
};

export async function sendTelegramMessage(params: SendMessageParams) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials not configured");
    return { ok: false, error: "Telegram not configured" };
  }

  const date = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
  });

  // Build UTM/source line
  const utm = params.utm;
  const utmParts: string[] = [];
  if (utm?.utm_source) utmParts.push(`Source: ${utm.utm_source}`);
  if (utm?.utm_medium) utmParts.push(`Medium: ${utm.utm_medium}`);
  if (utm?.utm_campaign) utmParts.push(`Campaign: ${utm.utm_campaign}`);
  if (utm?.utm_term) utmParts.push(`Term: ${utm.utm_term}`);
  if (utm?.utm_content) utmParts.push(`Content: ${utm.utm_content}`);
  const utmLine = utmParts.length > 0
    ? `\n📣 ${utmParts.join(" | ")}`
    : "";

  const text = `🚀 Nouveau lead Infinex !

👤 ${params.firstName} ${params.lastName}
📧 ${params.email}
📱 ${params.phone}
🏢 ${params.company}
💼 ${params.jobTitle}
💰 CA : ${params.revenue}
🎯 Services : ${params.service.join(", ")}${utmLine}

📅 ${date} | 🌐 ${params.locale}`;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    }
  );

  if (!response.ok) {
    console.error("Telegram API error: status", response.status);
    return { ok: false, error: "Notification service failed" };
  }

  return { ok: true };
}

type UgcFormationParams = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  participants: string;
  sessionDate: string;
  locale: string;
};

export async function sendUgcFormationTelegram(params: UgcFormationParams) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials not configured");
    return { ok: false, error: "Telegram not configured" };
  }

  const date = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
  });

  const text = `🎓 Inscription Formation UGC IA !

👤 ${params.firstName} ${params.lastName}
📧 ${params.email}
📱 ${params.phone}
🏢 ${params.company}
👥 Participants : ${params.participants}
📆 Session choisie : ${params.sessionDate}

📅 ${date} | 🌐 ${params.locale}`;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    }
  );

  if (!response.ok) {
    console.error("Telegram API error: status", response.status);
    return { ok: false, error: "Notification service failed" };
  }

  return { ok: true };
}
