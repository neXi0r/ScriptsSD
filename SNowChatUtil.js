// ==UserScript==
// @name         SD SNow chat tool
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Easy chat support utility tool
// @author       Alex 'neXi0r' Kielak
// @include      /^https?://qvcprod\.service-now\.com/\$c\.do#*
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/SNowChatUtil.js
// @updateURL    https://raw.githubusercontent.com/neXi0r/ScriptsSD/main/SNowChatUtil.js
// ==/UserScript==
/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/

var text0 = 'one';
var text1 = 'two';
var text2 = 'three';
var text3 = 'four';
var text4 = 'five';
var text5 = 'six';
var text6 = 'seven';
var text7 = 'eight';
var text8 = 'nine';
var text9 = 'ten';

var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="myButton0" type="button" title=' + text0 + '>1</button>' +
    '<button id="myButton1" type="button" title=' + text1 + '>2</button>' +
    '<button id="myButton2" type="button" title=' + text2 + '>3</button>' +
    '<button id="myButton3" type="button" title=' + text3 + '>4</button>' +
    '<button id="myButton4" type="button" title=' + text4 + '>5</button>' +
    '<button id="myButton5" type="button" title=' + text5 + '>6</button>' +
    '<button id="myButton6" type="button" title=' + text6 + '>7</button>' +
    '<button id="myButton7" type="button" title=' + text7 + '>8</button>' +
    '<button id="myButton8" type="button" title=' + text8 + '>9</button>' +
    '<button id="myButton9" type="button" title=' + text9 + '>10</button>';
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton0").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton1").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton2").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton3").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton4").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton5").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton6").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton7").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton8").addEventListener ("click", ButtonClickAction, false);
document.getElementById ("myButton9").addEventListener ("click", ButtonClickAction, false);

function ButtonClickAction (zEvent) {
    /*--- For our dummy action, we'll just add a line of text to the top
        of the screen.
    */
    var zNode = document.createElement ('p');
    zNode.innerHTML = 'The button was clicked.';
    document.getElementById ("myContainer").appendChild (zNode);
}

//--- Style our newly added elements using CSS.
GM_addStyle ( `
    #myContainer {
        position:               absolute;
        bottom:                    0;
        left:                   0;
        font-size:              20px;
        background:             orange;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );
