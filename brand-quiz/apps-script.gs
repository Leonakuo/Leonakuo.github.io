/**
 * Brand Bottleneck Quiz -> Google Sheet
 * Paste this into Extensions > Apps Script of the "Brand Quiz Leads" sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 */

const SHEET_NAME = "Sheet1"; // rename if your first tab has a different name
const TYPE_NAMES = {
  A: "The Backwards Brand",
  B: "The Mercedes in a Toyota Suit",
  C: "The Right Brand, Wrong Look",
  D: "The Loud Brand Nobody Hears"
};
const AREAS = { A: "Strategy", B: "Perception", C: "Visuals", D: "Audience" };

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    const now = Utilities.formatDate(new Date(), "Australia/Adelaide", "yyyy-MM-dd HH:mm");
    const coord = ((d.comboIndex || 0) - 1) * 2 + (d.stage === "early" ? 1 : 2);
    sh.appendRow([
      now,
      d.name || "",
      d.email || "",
      AREAS[d.primary] || d.primary,
      TYPE_NAMES[d.primary] || "",
      AREAS[d.secondary] || d.secondary,
      d.stage === "early" ? "Early" : "Established",
      d.comboIndex ? coord + " / 24" : "",
      d.s ? d.s.A : "",
      d.s ? d.s.B : "",
      d.s ? d.s.C : "",
      d.s ? d.s.D : "",
      (d.answers || []).join(""),
      d.pageUri || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Lets you open the web app URL in a browser to confirm it is live.
function doGet() {
  return ContentService.createTextOutput("Brand Quiz endpoint is live.");
}
