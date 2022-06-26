// ==UserScript==
// @name         MS Teams Formating
// @namespace    http://tampermonkey.net/
// @version      0.1.3a
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

function TeamsText2(event) {
    let bridge = g_form.getValue('incident.u_webex');
    let bridgeText = '';
    let addGroup = document.getElementById('incident.u_additional_group_to_notify_nonedit').innerHTML;
    if (bridge != '') {bridgeText = '\nhttps://hsni.webex.com/join/' + bridge + ' has been opened for this issue.';};
    let clip = 'P' + g_form.getValue('incident.priority') + ' - ' + g_form.getValue('sys_readonly.incident.number') + ' - ' + g_form.getValue('incident.short_description') + '\n' + addGroup + ' has been paged.' + bridgeText;
	navigator.clipboard.writeText(clip);
}

function EBmsg(event) {
	let clip = 'Please investigate: ' + g_form.getValue('sys_readonly.incident.number') + ' regarding: ' + g_form.getValue('incident.short_description') + '\nPage requested by: ';
	navigator.clipboard.writeText(clip);
}

function EBmsg2(event) {
	let bridge = g_form.getValue('incident.u_webex');
	let clip = 'Please join ' + bridge.toUpperCase() + ' bridge to investigate: ' + g_form.getValue('sys_readonly.incident.number') + ' regarding: ' + g_form.getValue('incident.short_description') + '\nPage requested by: ';
	navigator.clipboard.writeText(clip);
}

function EBText(event) {
    let addGroup = document.getElementById('incident.u_additional_group_to_notify_nonedit').innerHTML;
    let clip = addGroup + ' has been paged.';
	navigator.clipboard.writeText(clip);
}


var priority_addons = document.querySelector("#element\\.incident\\.priority > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var eb_addonsTeams = document.querySelector("#element\\.incident\\.u_everbridge_notification_sent > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var eb_addonsText = document.querySelector("#element\\.incident\\.u_market > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");

priority_addons.innerHTML += '<button id="myButton_Teams" style="white-space: nowrap" type="button" title="" data-original-title="Copy TEAMS" aria-expanded="false">Teams Text</button>';
eb_addonsTeams.innerHTML += '<button id="myButton_Teams2" style="white-space: nowrap" type="button" title="" data-original-title="Copy for teams" aria-expanded="false">TT</button>';
eb_addonsTeams.innerHTML += '<button id="myButton_Teams3" style="white-space: nowrap" type="button" title="" data-original-title="Just XX has been paged. text." aria-expanded="false">EB</button>';
eb_addonsText.innerHTML += '<button id="myButton_EB1" style="white-space: nowrap" type="button" title="" data-original-title="EB notification message" aria-expanded="false">NM</button>';
eb_addonsText.innerHTML += '<button id="myButton_EB2" style="white-space: nowrap" type="button" title="" data-original-title="EB notification message and bridge" aria-expanded="false">NMB</button>';

document.querySelector("#myButton_Teams").addEventListener ("click", TeamsText , false);
document.querySelector("#myButton_Teams2").addEventListener ("click", TeamsText2 , false);
document.querySelector("#myButton_Teams3").addEventListener ("click", EBText , false);
document.querySelector("#myButton_EB1").addEventListener ("click", EBmsg , false);
document.querySelector("#myButton_EB2").addEventListener ("click", EBmsg2 , false);
