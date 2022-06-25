// ==UserScript==
// @name         MS Teams Formating
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MS Teams SD formating button
// @author       Alex 'neXi0r' Kielak
// @match        https://qvcprod.service-now.com/incident.do?*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/TeamsFormating.js
// @updateURL    https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/TeamsFormating.js
// ==/UserScript==

function TeamsText(event) {
    let clip = 'P' + g_form.getValue('incident.priority') + ' - ' + g_form.getValue('sys_readonly.incident.number') + ' - ' + g_form.getValue('incident.short_description') + '\n\n' + 'Issue reported by: ' + g_user.fullName
	navigator.clipboard.writeText(clip);
}

var priority_addons = document.querySelector("#element\\.incident\\.priority > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons")
var eb_addons = document.querySelector("#element\\.incident\\.u_everbridge_notification_sent > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons")

priority_addons.innerHTML += '<button id="myButton_Teams" style="white-space: nowrap" type="button" title="" data-original-title="Copy TEAMS" aria-expanded="false">Teams Text</button>';
eb_addons.innerHTML += '<button id="myButton_Teams2" style="white-space: nowrap" type="button" title="" data-original-title="Copy TEAMS" aria-expanded="false">Teams Text</button>';

document.querySelector("#myButton_Teams").addEventListener ("click", TeamsText , false);
document.querySelector("#myButton_Teams2").addEventListener ("click", TeamsText , false);
