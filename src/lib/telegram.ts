type SendMessageParams = {
  name: string;
  email: string;
  company: string;
  revenue: string;
  message: string;
  locale: string;
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

  const text = `🚀 Nouveau lead Infinex !

👤 Nom : ${params.name}
📧 Email : ${params.email}
🏢 Entreprise : ${params.company}
💰 CA : ${params.revenue}
💬 Message : ${params.message}

📅 ${date} | 🌐 ${params.locale}`;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Telegram API error:", error);
    return { ok: false, error };
  }

  return { ok: true };
}
