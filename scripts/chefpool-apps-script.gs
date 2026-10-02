// Culinair AnnoNu: chefpool-aanmeldingen van culinair-annonu.com/chefpool
// naar de Google Sheet "Chefpool private dinners - aanmeldingen"
// (Drive-map MHK / Private chef).
//
// Installatie (eenmalig):
// 1. Open de Sheet > Extensies > Apps Script, vervang de code door dit bestand.
// 2. Implementeren > Nieuwe implementatie > type "Web-app".
//    Uitvoeren als: ik. Toegang: iedereen.
// 3. Kopieer de web-app-URL naar Vercel als CHEFPOOL_SHEET_WEBHOOK_URL.

const SHEET_ID = "1jiwgzQFfHBxd1njYhEgzUUBT8cR5kXPBHcHiO8Dx48U";

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d.name || !d.email) return out({ ok: false, error: "missing fields" });
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    sheet.appendRow([
      new Date(),
      safe(d.name),
      safe(d.street),
      text(d.postalCode),
      safe(d.city),
      safe(d.email),
      text(d.phone),
      safe(d.whatsapp || ""),
      safe((d.regions || []).join(", ")),
      "Nieuw",
      "",
    ]);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

// Voorkomt dat invoer als formule wordt uitgevoerd (=, +, -, @).
function safe(v) {
  const s = String(v || "");
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

// Altijd als tekst opslaan, zodat 06... en postcodes hun nul houden.
function text(v) {
  return "'" + String(v || "");
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
