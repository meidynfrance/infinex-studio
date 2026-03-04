import { google } from "googleapis";

type LeadData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  revenue: string;
  service: string[];
  locale: string;
  utm?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };
};

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_NAME = "Leads Infinex";

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    throw new Error("Google Sheets credentials not configured");
  }

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function initializeSheetHeaders() {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const headers = [
    "Date",
    "Prénom",
    "Nom",
    "Email",
    "Téléphone",
    "Entreprise",
    "Poste",
    "CA",
    "Services",
    "Source",
    "Medium",
    "Campagne",
    "Langue",
  ];

  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID!,
    range: `${SHEET_NAME}!A1:M1`,
    valueInputOption: "RAW",
    requestBody: {
      values: [headers],
    },
  });

  return { ok: true };
}

export async function appendLeadToSheet(data: LeadData) {
  if (!SPREADSHEET_ID) {
    console.error("GOOGLE_SPREADSHEET_ID not configured");
    return { ok: false, error: "Spreadsheet ID not configured" };
  }

  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const date = new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
    });

    const row = [
      date,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.company,
      data.jobTitle,
      data.revenue,
      data.service.join(", "),
      data.utm?.utm_source || "",
      data.utm?.utm_medium || "",
      data.utm?.utm_campaign || "",
      data.locale,
      "A Contacter",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:N`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [row],
      },
    });

    return { ok: true };
  } catch (error) {
    console.error("Google Sheets error:", error);
    return { ok: false, error: String(error) };
  }
}
