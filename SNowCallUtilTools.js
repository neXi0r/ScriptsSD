// ==UserScript==
// @name         ServiceNow Call Utility Tools
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Few utility buttons that allow easier work with Service Now call forms.
// @author       Alex 'neXi0r' Kielak
// @match        https://qvcprod.service-now.com/new_call.do?*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/SNowCallUtilTools.js
// @updateURL    https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/SNowCallUtilTools.js
// ==/UserScript==


function ID_Button(event) {
    let tempButton = $('id_button_');
    navigator.clipboard.writeText(g_form.getReference('u_service_recipient').user_name);
    tempButton.innerHTML = 'C';
    setTimeout(function(){ tempButton.innerHTML= "ID"; }, 1000);
}
function PS_button(event) {
    let clip = 'get-aduser -Identity ' + g_form.getReference('u_service_recipient').user_name + ' -Server qrg.one -Properties homepostaladdress';
    navigator.clipboard.writeText(clip);
}

function ID_Button2(event) {
    let tempButton = $('id_button_');
    navigator.clipboard.writeText(g_form.getReference('new_call.caller').user_name);
    tempButton.innerHTML = 'C';
    setTimeout(function(){ tempButton.innerHTML= "ID"; }, 1000);
}
function PS_button2(event) {
    let clip = 'get-aduser -Identity ' + g_form.getReference('new_call.caller').user_name + ' -Server qrg.one -Properties homepostaladdress';
    navigator.clipboard.writeText(clip);
}


var caller_addons = document.getElementById("viewr.new_call.u_service_recipient").parentElement;
var caller_addons2 = document.getElementById("viewr.new_call.caller").parentElement;

caller_addons.innerHTML += '<button id="id_button_" style="white-space: nowrap" type="button" title="" data-original-title="Copy userID" aria-expanded="false">ID</button>';
caller_addons.innerHTML += '<button id="ps_button_" style="white-space: nowrap" type="button" title="" data-original-title="Copy QRG PS" aria-expanded="false">QRG CHECK</button>';

caller_addons2.innerHTML += '<button id="id_button__" style="white-space: nowrap" type="button" title="" data-original-title="Copy userID" aria-expanded="false">ID</button>';
caller_addons2.innerHTML += '<button id="ps_button__" style="white-space: nowrap" type="button" title="" data-original-title="Copy QRG PS" aria-expanded="false">QRG CHECK</button>';

document.querySelector("#id_button_").addEventListener ("click", ID_Button , false);
document.querySelector("#ps_button_").addEventListener ("click", PS_button , false);

document.querySelector("#id_button__").addEventListener ("click", ID_Button2 , false);
document.querySelector("#ps_button__").addEventListener ("click", PS_button2 , false);
