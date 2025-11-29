// JS for My Universal Signature used in all of my projects..

// Creating and Appending the Element
let element = `
	<div id="us-signature">
		<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14"/><path stroke-linecap="round" d="M14 10c-.613.643-1.289 1-2 1s-1.387-.357-2-1"/><path d="M7.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974ZM15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.5V11"/></g></svg>
		<div id="tooltip">
			Maker - <a href="https://unseenumair.github.io/" target="_blank" rel="noopener noreferrer">US</a>
		</div>
	</div>
`

document.body.insertAdjacentHTML("beforeend", element); // Add Signature at body End
const cont = document.querySelector("#us-signature"); // Store html of signature

// Taking parsed Values from data-attributes
let script = document.currentScript; // means tag of current running script

function getData(attr){
	let value = script.getAttribute(attr);

	if (value === null || value.trim() === ""){
		return "";
	}
	else {
		return value
	}
}


let offset = getData("data-offset");
let position = getData("data-position");
let color = getData("data-color");
let bg = getData("data-bg");

// Configuring Styles according to given data-set

try {
	position = JSON.parse(position);
	offset = JSON.parse(offset);

	if (position){
		if (offset){
			cont.style[position[0]] = offset[0];
			cont.style[position[1]] = offset[1];
		}
		else {
			cont.style[position[0]] = "0";
			cont.style[position[1]] = "0";
		}
		
		if (position[1] === "right"){ cont.style.flexDirection = "row-reverse"; }
	}
} catch(error) {
	console.log(error);
	cont.style.bottom = "3%";
	cont.style.left = "2%";
}

try {
	if (color){ document.documentElement.style.setProperty("--signatureCol", color) }
	if (bg){ document.documentElement.style.setProperty("--signatureBg", bg) }
} 
catch (error){
	console.log(error);
}

// Handling ToolTip Opacity 

const icon = cont.querySelector("#icon");
const tooltip = cont.querySelector("#tooltip");

icon.addEventListener("mouseover", ()=>{
	tooltip.style.opacity = "1";
})

cont.addEventListener("mouseleave", ()=>{
	tooltip.style.opacity = "0";
})
