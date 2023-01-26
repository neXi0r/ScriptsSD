// ==UserScript==
// @name         MS Teams Testing
// @namespace    http://tampermonkey.net/
// @version      0.3.4
// @description  MS Teams SD formating button
// @author       Alex 'neXi0r' Kielak
// @match        https://qvcprod.service-now.com/incident.do?*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/neXi0r/ScriptsSD/Testing/TeamsFormating.js
// @updateURL    https://raw.githubusercontent.com/neXi0r/ScriptsSD/Testing/TeamsFormating.js
// ==/UserScript==

// \' - needed to use ' in a sentence. \n - new line.
// Please leave last last character of Part1 and first character of Part2 unchanged. format is "Part1 INC# - shortDesc. - Part2"
var msgPart1 = 'Hello. I\'m from IT Service Desk and I\'m contacting you regarding ';
var msgPart2 = '.\nBefore we proceed, please provide additional information:\n';

function copyToClip(str) {
	function listener(e) {
		e.clipboardData.setData("text/html", str);
		e.clipboardData.setData("text/plain", str);
		e.preventDefault();
	}
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
}

function TeamsText(event) {
	let boldPart1 = 'P' + g_form.getValue('incident.priority') + ' - ' + g_form.getValue('sys_readonly.incident.number');
	let boldPart2 = g_form.getValue('sys_display.incident.assignment_group');
	let clip = boldPart1.bold() + ' - ' + g_form.getValue('incident.short_description') + '<br>' + boldPart2.bold() + ' has been paged.';
	copyToClip(clip);
	if (g_form.getValue('incident.priority') < 2) {alert('Remember to tag the OPS channel as this is a P1 INC!')};
}

function TeamsText2(event) {
	let bridge = g_form.getValue('incident.u_webex');
	let bridgeText = '';
	let addGroup = document.getElementById('incident.u_additional_group_to_notify_nonedit').innerHTML;
	let boldPart = 'P' + g_form.getValue('incident.priority') + ' - ' + g_form.getValue('sys_readonly.incident.number');
	if (addGroup == '') {addGroup = g_form.getValue('sys_display.incident.assignment_group');};
	if (bridge != '') {
		let bridgeLink = 'https://hsni.webex.com/join/' + bridge;
		bridgeText = '<br><a href = "' + bridgeLink + '">' + bridgeLink + '</a>' + ' has been opened for this issue.';
	};
	let clip = boldPart.bold() + ' - ' + g_form.getValue('incident.short_description') + '<br>' + addGroup.bold() + ' has been paged.' + bridgeText;
	copyToClip(clip);
	if (g_form.getValue('incident.priority') < 2) {alert('Remember to tag the OPS channel as this is a P1 INC!')};
}

function EBmsg(event) {
	let clip = 'Please investigate: ' + g_form.getValue('sys_readonly.incident.number') + ' regarding: ' + g_form.getValue('incident.short_description') + ' issue reported by: ' + g_form.getValue('sys_display.incident.caller_id') + '\nPage requested by: ';
	navigator.clipboard.writeText(clip);
}

function EBmsg2(event) {
	let bridge = g_form.getValue('incident.u_webex');
	let clip = 'Please join ' + bridge.toUpperCase() + ' bridge to investigate: ' + g_form.getValue('sys_readonly.incident.number') + ' regarding: ' + g_form.getValue('incident.short_description') + ' issue reported by: ' + g_form.getValue('sys_display.incident.caller_id') + '\nPage requested by: ';
	navigator.clipboard.writeText(clip);
}

function EBText(event) {
	let addGroup = document.getElementById('incident.u_additional_group_to_notify_nonedit').innerHTML;
	if (event.shiftKey){
		let clip = 'https://hsni.webex.com/join/' + g_form.getValue('incident.u_webex') + ' has been opened for this issue.';
		navigator.clipboard.writeText(clip);
	}
	else if (event.ctrlKey){
		let clip = document.getElementById('incident.u_notification_list_nonedit').innerHTML + ' has been paged.';
		navigator.clipboard.writeText(clip);
	}
	else{
		let clip = addGroup + ' has been paged.';
		navigator.clipboard.writeText(clip);
	}
}

function teamsOnHold(event) {
	let clip = msgPart1 + g_form.getValue('sys_readonly.incident.number') + ' - ' + g_form.getValue('incident.short_description') + msgPart2;
	navigator.clipboard.writeText(clip);
}

function PScmd_copy(event) {
    let clip = 'get-aduser -Identity ' + g_form.getReference('u_on_behalf_of').user_name + ' -Server qrg.one -Properties homepostaladdress';
    navigator.clipboard.writeText(clip);
}

function Retek_Magic(event) {
    g_form.setValue('incident.category',"Data");
    g_form.setValue('incident.subcategory',"Other");
    g_form.setValue('incident.business_service',"Retek 7");
    g_form.setValue('incident.cmdb_ci',"Retek 7");
    g_form.setValue('incident.close_code',"Solved");
    g_form.setValue('incident.close_notes',"Item successfully republished.");
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ME_button(event) {
    g_form.setValue('incident.assigned_to',g_user.userID, g_user.fullName);
    if (event.shiftKey) {
        $('sysverb_update_and_stay').click();
    }
}

function ID_Button(event) {
    let tempButton = $('myButton2');
    navigator.clipboard.writeText(g_form.getReference('caller_id').user_name);
    tempButton.innerHTML = 'C';
    setTimeout(function(){ tempButton.innerHTML= "ID"; }, 1000);
}
function ID_Button2(event) {
    let tempButton = $('myButton2');
    navigator.clipboard.writeText(g_form.getReference('u_on_behalf_of').user_name);
    tempButton.innerHTML = 'C';
    setTimeout(function(){ tempButton.innerHTML= "ID"; }, 1000);
}

var priority_addons = document.querySelector("#element\\.incident\\.priority > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var state_addons = document.querySelector("#element\\.incident\\.state > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var webex_addons = document.querySelector("#element\\.incident\\.u_webex > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var everbridge_notification_sent_addons = document.querySelector("#element\\.incident\\.u_everbridge_notification_sent > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var language_addons = document.querySelector("#element\\.incident\\.u_language > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var market_addons = document.querySelector("#element\\.incident\\.u_market > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var close_note_addons = document.querySelector("#element\\.incident\\.close_code > div.col-xs-2.col-sm-3.col-lg-2.form-field-addons");
var on_behalf_of_addons = document.getElementById("viewr.incident.u_on_behalf_of").parentElement;

var caller_addons = document.getElementById("viewr.incident.caller_id").parentElement;
var assignedTo_addons = document.getElementById("viewr.incident.assigned_to").parentElement;

priority_addons.innerHTML += '<button id="myButton_Teams1" style="white-space: nowrap" type="button" title="" data-original-title="Copy message for MS teams OPS-SD channel." aria-expanded="false">OPS chat MSG</button>';
state_addons.innerHTML += '<button id="myButton_reachout" style="white-space: nowrap" type="button" title="" data-original-title="Copy teams reach out message." aria-expanded="false">Reach out</button>';
webex_addons.innerHTML += '<button id="myButton_Teams2" style="white-space: nowrap" type="button" title="" data-original-title="Copy message for MS teams OPS-SD channel." aria-expanded="false">OPS chat MSG</button>';
everbridge_notification_sent_addons.innerHTML += '<button id="myButton_Teams3" style="white-space: nowrap" type="button" title="" data-original-title="Copy \'XX has been paged.\' message.\nShift click for just bridge address.\nCrtl click for Additional Individual" aria-expanded="false">Who was paged</button>';
language_addons.innerHTML += '<button id="myButton_EB1" style="white-space: nowrap" type="button" title="" data-original-title="EB notification message" aria-expanded="false">Notification Message</button>';
market_addons.innerHTML += '<button id="myButton_EB2" style="white-space: nowrap" type="button" title="" data-original-title="EB notification message with bridge" aria-expanded="false">Notification Message + Bridge</button>';
on_behalf_of_addons.innerHTML += '<button id="myButton3" style="white-space: nowrap" type="button" title="" data-original-title="Copy User ID" aria-expanded="false">ID</button><button id="myButton_PSCMD" style="white-space: nowrap" type="button" title="" data-original-title="Copy QRG.ONE migration check PowerShell command" aria-expanded="false">QRG.ONE CHECK</button>';

if(g_form.getValue('incident.short_description')=='Republish an Item in Retek'){
close_note_addons.innerHTML += '<button id="myButton_Retek" style="white-space: nowrap" type="button" title="" data-original-title="Retek magic" aria-expanded="false">Retek</button>';
}

caller_addons.innerHTML += '<button id="myButton2" style="white-space: nowrap" type="button" title="" data-original-title="Copy User ID" aria-expanded="false">ID</button>';
assignedTo_addons.innerHTML = assignedTo_addons.innerHTML+'<button class="form_action_button header action_context btn btn-default" id="personal1" style="white-space: nowrap" type="button" title="" value="sysverb_update_and_stay" id="sysverb_update_and_stay" data-action-name="sysverb_update_and_stay"  name="not_important" data-original-title="Assign to yourself" aria-expanded="false">ME</button>';


document.querySelector("#myButton_Teams1").addEventListener ("click", TeamsText , false);
document.querySelector("#myButton_Teams2").addEventListener ("click", TeamsText2 , false);
document.querySelector("#myButton_Teams3").addEventListener ("click", EBText , false);
document.querySelector("#myButton_EB1").addEventListener ("click", EBmsg , false);
document.querySelector("#myButton_EB2").addEventListener ("click", EBmsg2 , false);
document.querySelector("#myButton_reachout").addEventListener ("click", teamsOnHold , false);
document.querySelector("#myButton_PSCMD").addEventListener ("click", PScmd_copy , false);
document.querySelector("#myButton3").addEventListener ("click", ID_Button2 , false);
document.querySelector("#myButton_Retek").addEventListener ("click", Retek_Magic , false);

document.querySelector("#myButton2").addEventListener ("click", ID_Button , false);
document.querySelector("#personal1").addEventListener ("click", ME_button , false);
