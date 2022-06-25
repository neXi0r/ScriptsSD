// ==UserScript==
// @name         MS Teams Formating
// @namespace    http://tampermonkey.net/
// @version      0.1.1a
// @description  MS Teams SD formating button
// @author       Alex 'neXi0r' Kielak
// @match        https://qvcprod.service-now.com/incident.do?*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/TeamsFormating.js
// @updateURL    https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/TeamsFormating.js
// ==/UserScript==

function TeamsText(event) {
    let clip = 'P' + g_form.getValue('incident.priority') + ' - ' + g_form.getValue('sys_readonly.incident.number') + ' - ' + g_form.getValue('incident.short_description') + '\n' + g_form.getValue('sys_display.incident.assignment_group') + ' has been paged.'
	navigator.clipboard.writeText(clip);
}

function TeamsText(event) {
    let clip = 'P' + g_form.getValue('incident.priority') + ' - ' + g_form.getValue('sys_readonly.incident.number') + ' - ' + g_form.getValue('incident.short_description') + '\n' + g_form.getValue('incident.u_additional_group_to_notify_nonedit') + ' has been paged.'
	navigator.clipboard.writeText(clip);
}

function EBText(event) {
    let clip = g_form.getValue('incident.u_additional_group_to_notify_nonedit') + ' has been paged.'
	navigator.clipboard.writeText(clip);
}

var priority_addons = document.querySelector("#element\\.incident\\.priority > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons")
var eb_addons = document.querySelector("#element\\.incident\\.u_everbridge_notification_sent > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons")

priority_addons.innerHTML += '<button id="myButton_Teams" style="white-space: nowrap" type="button" title="" data-original-title="Copy text for MS teams." aria-expanded="false">Teams Text</button>';
eb_addons.innerHTML += '<button id="myButton_Teams2" style="white-space: nowrap" type="button" title="" data-original-title="Copy text for MS teams" aria-expanded="false">TT</button>';
eb_addons.innerHTML += '<button id="myButton_Teams3" style="white-space: nowrap" type="button" title="" data-original-title="Just XX has been paged. text." aria-expanded="false">EB</button>';

document.querySelector("#myButton_Teams").addEventListener ("click", TeamsText , false);
document.querySelector("#myButton_Teams2").addEventListener ("click", TeamsText2 , false);
document.querySelector("#myButton_Teams2").addEventListener ("click", EBText , false);
