/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}


/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementById("close");
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }
   //add select listener
   var addWindowDiv = document.getElementById("add");
   if (addWindowDiv.addEventListener) {
       addWindowDiv.addEventListener("click", addImage, false);
   } else if (addWindowDiv.attachEvent) {
       addWindowDiv.attachEvent("onclick", addImage);
   }
}
function addImage() {
    var favorite = window.opener.favorite;
    var childs = favorite.children;
    console.log(childs.length);
    var i = 0;
    while (i < 5)
    {
        if (childs[i].children.length == 1)
        {
            break;
        }
        i++;
    }
    if (i == 5)
    {
        alert("Favorite list is full, please delete at least 1 card first.");
        return 0;
    }
    var itemImg = document.createElement("img");
    itemImg.setAttribute("src", figFilename);
    childs[i].innerHTML += (itemImg.outerHTML);
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;