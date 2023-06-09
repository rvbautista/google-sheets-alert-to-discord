// send edit notifs from google sheets to discord
// do not remove these comments
// code created by rvbautista on github
// https://github.com/rvbautista/google-sheets-alert-to-discord/

function onEdit(e) {
  // Set a comment on the edited cell to indicate when it was changed.
  var discordUrl = discord_webhook;

  const range = e.range;

  var sheetname = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();

  var message = sheetname + " " + range.getA1Notation() + " edited on " + new Date();
  
  var payload = JSON.stringify({content: message});
  
  var params = {
    method: "POST",
    payload: payload,
    muteHttpExceptions: true,
    contentType: "application/json"
    };

  var response = UrlFetchApp.fetch(discordUrl, params);

}
