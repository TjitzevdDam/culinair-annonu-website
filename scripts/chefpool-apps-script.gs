// Culinair AnnoNu: chefpool-aanmeldingen van culinair-annonu.com/chefpool
// naar de Google Sheet "Chefpool private dinners - aanmeldingen".
//
// Installatie (eenmalig):
// 1. Open de Sheet > Extensies > Apps Script, vervang de code door dit bestand.
// 2. Implementeren > Nieuwe implementatie > type "Web-app".
//    Uitvoeren als: ik. Toegang: iedereen.
// 3. Kopieer de web-app-URL naar Vercel als CHEFPOOL_SHEET_WEBHOOK_URL.

const SHEET_ID = "1zj6TR76A9Al68e9_U08pt6ZkeHPwEflS4qKiaS4Htf0";

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d.name || !d.email) return out({ ok: false, error: "missing fields" });
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    sheet.appendRow([
      new Date(),
      safe(d.name),
      safe(d.email),
      safe(d.website || ""),
      safe((d.activeRegions || []).join(", ")),
      safe((d.wantedRegions || []).join(", ")),
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
  const s = String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
