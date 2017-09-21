/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var autoAdvance = setInterval(rightAdvance,5000);
var figureCount = 3;
var favorite = document.getElementById("favorite");
var favorite1, favorite2, favorite3, favorite4, favorite5;

/* add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   var filename;
   var currentFig;
   if (figureCount === 3) {
      for (var i = 1; i < 4; i++) {
         filename = "images/IMG_0" + photoOrder[i] + ".jpg";
         currentFig = document.getElementsByTagName("img")[i - 1];
         currentFig.src = filename;
      }
   } else {
      for (var i = 0; i < 5; i++) {
         filename = "images/IMG_0" + photoOrder[i] + ".jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src = filename;
      }
   }
}

/* stop automatic image switching and call rightAdvance() function */
function rightArrow() {
   clearInterval(autoAdvance);
   rightAdvance();
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* switch to 5-image layout */
function previewFive() {
   var articleEl = document.getElementsByTagName("article")[0];
   // create figure and img elements for fifth image
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";
   var lastImage = document.createElement("img");
   lastImage.width = "196";
   lastImage.height = "273";
   lastFigure.appendChild(lastImage);
//   articleEl.appendChild(lastFigure);
   articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));
   
   //clone figure element for fifth image and edit to be first image
   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   articleEl.insertBefore(firstFigure, document.getElementById("fig2"));
   
   figureCount = 5;
   //change button to hide extra images
   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewFive, false);
      numberButton.addEventListener("click", previewThree, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewFive);
      numberButton.attachEvent("onclick", previewThree);
   }
   
   // add appropriate src values to two new img elements
   document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + ".jpg";
   document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + ".jpg";
}

/* switch to 3-image layout */
function previewThree() {
   var articleEl = document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");
   figureCount = 3;
   articleEl.removeChild(document.getElementById("fig1"));
   articleEl.removeChild(document.getElementById("fig5"));
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.addEventListener("click", previewFive, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
}

/* open center figure in separate window */
function zoomFig() {
   var propertyWidth = 334;
   var propertyHeight  = 480;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "toolbar=no,menubar=no,directories=no,location=no,width=334,height=480";
   winOptions += ",left=" + winLeft;
   winOptions += ",top=" + winTop;
   var zoomWindow = window.open("zoom.htm", "zoomwin", winOptions);
   zoomWindow.focus();
}
function delBtn1MouseOver() {
    if (favorite1.children.length == 2)
    {
        document.getElementById("delBtn1").hidden = false;
    }
}
function delBtn1MouseLeave() {
    document.getElementById("delBtn1").hidden = true;
}
function delBtn2MouseOver() {
    if (favorite2.children.length == 2) {
        document.getElementById("delBtn2").hidden = false;
    }
}
function delBtn2MouseLeave() {
    document.getElementById("delBtn2").hidden = true;
}
function delBtn3MouseOver() {
    if (favorite3.children.length == 2) {
        document.getElementById("delBtn3").hidden = false;
    }
}
function delBtn3MouseLeave() {
    document.getElementById("delBtn3").hidden = true;
}
function delBtn4MouseOver() {
    if (favorite4.children.length == 2) {
        document.getElementById("delBtn4").hidden = false;
    }
}
function delBtn4MouseLeave() {
    document.getElementById("delBtn4").hidden = true;
}
function delBtn5MouseOver() {
    if (favorite5.children.length == 2) {
        document.getElementById("delBtn5").hidden = false;
    }
}
function delBtn5MouseLeave() {
    document.getElementById("delBtn5").hidden = true;
}
function delFavorite(num)
{
    favorite.children[num - 1].removeChild(favorite.children[num - 1].children[1]);
    var i = num;
    while (i < 5) {
        if (favorite.children[i].children.length == 2) {
            favorite.children[i - 1].appendChild(favorite.children[i].children[1]);
            i++;
        }
        else {
            break;
        }
    }
}
/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
     leftarrow.addEventListener("click", leftArrow, false); 
   } else if (leftarrow.attachEvent)  {
     leftarrow.attachEvent("onclick", leftArrow);
   }

   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
     rightarrow.addEventListener("click", rightArrow, false); 
   } else if (rightarrow.attachEvent)  {
     rightarrow.attachEvent("onclick", rightArrow);
   }

   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
     mainFig.addEventListener("click", zoomFig, false); 
   } else if (mainFig.attachEvent)  {
     mainFig.attachEvent("onclick", zoomFig);
   }
   
   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener("click", previewFive, false);
   } else if (showAllButton.attachEvent) {
      showAllButton.attachEvent("onclick", previewFive);
   }
   favorite1.addEventListener("mouseover", delBtn1MouseOver, false);
   favorite1.addEventListener("mouseleave", delBtn1MouseLeave, false);
   favorite2.addEventListener("mouseover", delBtn2MouseOver, false);
   favorite2.addEventListener("mouseleave", delBtn2MouseLeave, false);
   favorite3.addEventListener("mouseover", delBtn3MouseOver, false);
   favorite3.addEventListener("mouseleave", delBtn3MouseLeave, false);
   favorite4.addEventListener("mouseover", delBtn4MouseOver, false);
   favorite4.addEventListener("mouseleave", delBtn4MouseLeave, false);
   favorite5.addEventListener("mouseover", delBtn5MouseOver, false);
   favorite5.addEventListener("mouseleave", delBtn5MouseLeave, false);

}

/* create event listeners and populate image elements */
function setUpPage() {

    favorite1 = document.getElementById("favorite1");
    favorite2 = document.getElementById("favorite2");
    favorite3 = document.getElementById("favorite3");
    favorite4 = document.getElementById("favorite4");
    favorite5 = document.getElementById("favorite5");
    createEventListeners();
    populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
